import { Button, Heading, majorScale, Pane, Spinner } from "evergreen-ui";
import fs from "fs";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import { FC, useState } from "react";
import Application from "../src/components/modules/application";
import Container from "../src/components/utilities/container";

// import { posts as postsFromCMS } from "../../content";

interface PostFrontMatter<DateType = string> {
  title: string;
  slug: string;
  summary: string;
  publishedOn: DateType;
  revisedOn: DateType;
}

type PostSource = MDXRemoteSerializeResult<unknown, PostFrontMatter>;

interface Post {
  source: PostSource;
}

const JobPost: FC<Post> = ({ source, source: { frontmatter } }) => {
  const router = useRouter();

  const [isShown, setIsShown] = useState(false);

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    );
  }

  return (
    <Pane paddingRight={0} display="flex" flexDirection="column" height="100%">
      <Head>
        <title>{`Bundlefi Jobs | ${frontmatter.title}`}</title>
        <meta name="description" content={frontmatter.summary} />
      </Head>
      {/* <header>
        <HomeNav />
      </header> */}
      <Pane is="main" flex="1 0 auto">
        <Container>
          <Heading
            textAlign="center"
            fontSize="clamp(1.2rem, 8vw, 4rem)"
            lineHeight="clamp(2rem, 8vw, 4rem)"
            marginX={majorScale(2)}
            marginY={majorScale(3)}>
            {frontmatter.title}
          </Heading>
          <Pane marginX="1.2rem">
            <MDXRemote {...source} />
          </Pane>
        </Container>
      </Pane>

      <Application {...{ isShown, setIsShown, postTitle: frontmatter.title }} />

      <Pane
        is="footer"
        position="fixed"
        bottom={0}
        width="100%"
        display="flex"
        flexShrink={0}
        padding={16}
        background="tint2"
        borderRadius={3}
        zIndex={1}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Interested?</Heading>
        </Pane>
        <Pane>
          <Button appearance="primary" onClick={() => setIsShown(true)}>
            Apply
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((name) => ({
    params: { post: name.replace(".mdx", "") },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<
  { source: PostSource },
  { post: string }
> = async ({ params, preview }) => {
  let postFile;

  try {
    const postPath = path.join(process.cwd(), "_posts", `${params!.post}.mdx`);
    postFile = fs.readFileSync(postPath, "utf-8");
  } catch {
    // This would be a back up of posts that might be placed
    // OR we can reach out to a CMS to full down any posts that might be stored there.

    // const collection = preview ? postsFromCMS.draft : postsFromCMS.published;
    // postFile = collection.find((p) => {
    //   const { data } = matter(p);
    //   return data.post === params!.post;
    // });

    throw new Error("no post");
  }

  if (!postFile) {
    throw new Error("no post");
  }

  const mdxSource = await serialize<unknown, PostFrontMatter<Date>>(postFile, {
    parseFrontmatter: true,
  });

  const source = {
    ...mdxSource,
    frontmatter: {
      ...mdxSource.frontmatter,
      publishedOn: mdxSource.frontmatter.publishedOn?.toJSON() || null,
      revisedOn: mdxSource.frontmatter.revisedOn?.toJSON() || null,
    } as PostFrontMatter,
  };

  return {
    props: {
      source,
    },
  };
};

export default JobPost;
