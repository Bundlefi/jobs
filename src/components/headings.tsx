import { Heading } from "evergreen-ui";
import React, { FC, PropsWithChildren } from "react";

export const H1: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h1" size={800} marginTop={16}>
      {props.children}
    </Heading>
  );
};
export const H2: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h2" size={700} marginTop={16}>
      {props.children}
    </Heading>
  );
};
export const H3: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h3" marginTop={16}>
      {props.children}
    </Heading>
  );
};
export const H4: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h4" size={400} marginTop={16}>
      {props.children}
    </Heading>
  );
};
export const H5: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h5" size={300} marginTop={24}>
      {props.children}
    </Heading>
  );
};
export const H6: FC<PropsWithChildren> = (props) => {
  return (
    <Heading is="h6" size={300} marginTop={28}>
      {props.children}
    </Heading>
  );
};

const Headings = { H1, H2, H3, H4, H5, H6 };
export default Headings;
