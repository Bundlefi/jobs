import { Card } from "evergreen-ui";
import React, { FC, PropsWithChildren } from "react";

export interface ApplicationCardProps {
  display: boolean;
}

const ApplicationCard: FC<PropsWithChildren<ApplicationCardProps>> = ({
  children,
  display,
}) => {
  if (display == undefined) throw "Must pass display into Application Card";

  return (
    <Card
      backgroundColor="white"
      elevation={1}
      aria-hidden={!display}
      display={display ? "block" : "none"}
      alignItems="center"
      justifyContent="center"
      role="tabpanel"
      marginBottom={16}
      paddingTop={16}
      paddingX={24}>
      {children}
    </Card>
  );
};

export default ApplicationCard;
