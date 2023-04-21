import { majorScale, Pane } from "evergreen-ui";
import Container from "../src/components/container";
import Hero from "../src/components/hero";
import Postings from "../src/components/postings";

export default function Home() {
  return (
    <Pane background="tint2">
      <header>
        <Container>
          <Hero content={{ title: "Hero", body: "This is content." }} />
        </Container>
      </header>
      <main>
        {[{ title: "Yerp", body: "This is the first posting" }].map(
          (feature, i) => (
            <Postings
              key={feature.title}
              title={feature.title}
              body={feature.body}
              image="/docs.png"
              invert={i % 2 === 0}
            />
          )
        )}
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
