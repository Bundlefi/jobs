import { majorScale, Pane } from "evergreen-ui";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { FC } from "react";
import { PostFrontMatter } from "../src/components/providers/application/application.provider";
import Container from "../src/components/utilities/container";
import Headings from "../src/components/utilities/headings";
import Hero from "../src/components/utilities/hero";
import Postings from "../src/components/utilities/postings";

interface Props {
  posts: PostFrontMatter[];
}

const Home: FC<Props> = ({ posts }) => {
  return (
    <Pane background="tint2">
      <header>
        <Container>
          <Hero
            content={{
              title: "We are hiring!",
              body: "Check out the positions below",
            }}>
            <Pane paddingTop={16}>
              <Headings.H1 marginLeft={0}>{"WIP"}</Headings.H1>
              <Headings.H3 marginLeft={0}>
                {"This site is a work in progress."}
              </Headings.H3>
            </Pane>
          </Hero>
        </Container>
      </header>
      <main>
        {posts.map((post, idx) => (
          <Postings
            key={post.id}
            post={post}
            image="https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png"
            invert={idx % 2 === 0}
          />
        ))}
      </main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          <Container>{`Footer :)`}</Container>
        </Pane>
      </footer>
    </Pane>
  );
};

export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "_posts");
  const filenames = fs.readdirSync(postDirectory);
  const postsContent = await Promise.all(
    filenames.map(async (name) => {
      const filePath = path.join(postDirectory, name);
      const file = fs.readFileSync(filePath, "utf-8");
      try {
        const mdxSource = await serialize<unknown, PostFrontMatter<Date>>(
          file,
          {
            parseFrontmatter: true,
          }
        );

        return {
          ...mdxSource.frontmatter,
          publishedOn: mdxSource.frontmatter.publishedOn?.toJSON() || null,
          revisedOn: mdxSource.frontmatter.revisedOn?.toJSON() || null,
        } as PostFrontMatter;
      } catch (error) {
        return;
      }
    })
  );

  return {
    props: {
      posts: (postsContent ?? []).filter(Boolean),
    },
  };
}

export default Home;
