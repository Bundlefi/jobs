import React, { FC, PropsWithChildren } from "react";
import { Pane } from "evergreen-ui";

interface props {
  height?: string;
}

type ContainerProps = PropsWithChildren<props>;

const Container: FC<ContainerProps> = ({ children, ...styles }) => (
  <Pane
    maxWidth="960px"
    marginX="auto"
    width="100%"
    fontSize="clamp(1rem, 8vw, 1rem)"
    {...styles}>
    {children}
  </Pane>
);

export default Container;
