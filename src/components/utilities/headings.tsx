import { Heading, HeadingProps, Size } from "evergreen-ui";
import { FC } from "react";

type Func<P, R> = (props: P) => FC<R>;

type is = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface BuildHeadProps {
  is: is;
  size: Size;
  margin: number;
}

const buildHeading: Func<BuildHeadProps, HeadingProps> = (props) => {
  return ({ children, ...styles }) => {
    return (
      <Heading {...styles} {...props}>
        {children}
      </Heading>
    );
  };
};

const Headings = {
  H1: buildHeading({ is: "h1", size: 800, margin: 16 }),
  H2: buildHeading({ is: "h2", size: 700, margin: 16 }),
  H3: buildHeading({ is: "h3", size: 500, margin: 16 }),
  H4: buildHeading({ is: "h4", size: 400, margin: 16 }),
  H5: buildHeading({ is: "h5", size: 300, margin: 24 }),
  H6: buildHeading({ is: "h6", size: 300, margin: 28 }),
};

export default Headings;
