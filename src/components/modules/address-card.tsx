import { Pane, TextInputField } from "evergreen-ui";
import { FC } from "react";
import Headings from "../utilities/headings";
import { TabSwitchAppliedProps } from "../utilities/tab-switch";
import ApplicationCard from "./application-card";

interface AddressCardProps extends TabSwitchAppliedProps {
  id: string;
}

const AddressCard: FC<AddressCardProps> = ({ display = false }) => {
  return (
    <ApplicationCard display={display}>
      <Pane display="flex" flexWrap="wrap">
        <Headings.H2 marginBottom={24}>Address Information</Headings.H2>
        <TextInputField required label="Street" width="100%" />
        <TextInputField label="Suite/Apt/Unit" width="100%" />
        <TextInputField required label="City" width="100%" />
        <TextInputField required label="State" width="100%" />
        <TextInputField required label="Zip" width="100%" />
      </Pane>
    </ApplicationCard>
  );
};

export default AddressCard;
