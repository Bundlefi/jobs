import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import Headings from "../src/components/headings";
import List from "../src/components/list";
import Paragraph from "../src/components/paragraph";
import "../src/styles/global.css";

const components = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  p: Paragraph,
  ul: List.UnorderedList,
  li: List.ListItem,
};

export default function Jobs({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />;
    </MDXProvider>
  );
}
