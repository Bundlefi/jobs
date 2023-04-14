import { Paragraph as EG_Paragraph } from "evergreen-ui";
import React, { FC, PropsWithChildren } from "react";

const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <EG_Paragraph marginTop={12} size={400}>
      {children}
    </EG_Paragraph>
  );
};

export default Paragraph;
