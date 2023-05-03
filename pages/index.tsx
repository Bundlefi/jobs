import { majorScale, Pane } from "evergreen-ui";
import Container from "../src/components/utilities/container";
import Hero from "../src/components/utilities/hero";
import Postings from "../src/components/utilities/postings";

export default function Home() {
  return (
    <Pane background="tint2">
      <header>
        <Container>
          <Hero
            content={{
              title: "WIP",
              body: "This is a work in progress. Patience!!!!",
            }}
          />
        </Container>
      </header>
      <main>
        {[{ title: "", body: "" }].map((feature, i) => (
          <Postings
            key={feature.title}
            title={feature.title}
            body={feature.body}
            image="/docs.png"
            invert={i % 2 === 0}
          />
        ))}
      </main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          <Container>hello</Container>
        </Pane>
      </footer>
    </Pane>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
