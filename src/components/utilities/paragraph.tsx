import { Paragraph as EG_Paragraph, ParagraphProps } from "evergreen-ui";
import { FC, PropsWithChildren } from "react";

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  children,
  ...styles
}) => {
  return (
    <EG_Paragraph marginTop={12} size={400} {...styles}>
      {children}
    </EG_Paragraph>
  );
};

export default Paragraph;
