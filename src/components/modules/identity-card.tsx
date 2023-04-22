import { Pane, TextInputField } from "evergreen-ui";
import { FC } from "react";
import Headings from "../utilities/headings";
import { TabSwitchAppliedProps } from "../utilities/tab-switch";
import ApplicationCard from "./application-card";

interface IdentityCardProps extends TabSwitchAppliedProps {
  id: string;
}

const IdentityCard: FC<IdentityCardProps> = ({ display = true }) => {
  return (
    <ApplicationCard display={display}>
      <Pane display="flex" flexWrap="wrap">
        <Headings.H2 marginBottom={24}>Contact Information</Headings.H2>
        <TextInputField required label="First Name" width="100%" />
        <TextInputField required label="Last Name" width="100%" />
        <TextInputField required label="Email" width="100%" />
        <TextInputField required label="Phone Number" width="100%" />
      </Pane>
    </ApplicationCard>
  );
};

export default IdentityCard;
