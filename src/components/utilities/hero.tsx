import React, { FC, PropsWithChildren } from "react";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";

interface HeroProps extends PropsWithChildren {
  content: { title: string; body: string };
}

const Hero: FC<HeroProps> = ({ children, content }) => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)}px)`}>
      <Pane>
        <Heading
          fontSize="clamp(2rem, 8vw, 6rem)"
          lineHeight="clamp(2rem, 8vw, 6rem)"
          marginBottom={majorScale(8)}>
          {content.title}
        </Heading>
        <Paragraph
          fontSize="clamp(1.2rem, 4vw, 1.5rem)"
          lineHeight="clamp(1.2rem, 4vw, 2rem)">
          {content.body}
        </Paragraph>
        {children}
      </Pane>
    </Pane>
  );
};

export default Hero;
