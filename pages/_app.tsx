import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import Headings from "../src/components/utilities/headings";
import List from "../src/components/utilities/list";
import Paragraph from "../src/components/utilities/paragraph";
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
    // The components above are incompatible due to the HTMLAttribute "is"
    // React has it defined as string | undefined
    // Evergreen is using the string literal which doesn't match
    // Example: "h1" | "p" is not assignable to string
    // @ts-ignore
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
