import { Pane } from "evergreen-ui";
import React, { FC, PropsWithChildren } from "react";
import MultipleFileUploader from "../utilities/multi-file-uploader";
import { TabSwitchAppliedProps } from "../utilities/tab-switch";
import ApplicationCard from "./application-card";

interface UploadCardProps extends TabSwitchAppliedProps {
  id: string;
}

const UploadCard: FC<PropsWithChildren<UploadCardProps>> = ({
  display = false,
  children,
}) => {
  const isMobileDevice = true;

  return (
    <ApplicationCard display={display}>
      <Pane display="flex" flexWrap="wrap">
        <MultipleFileUploader />
      </Pane>
    </ApplicationCard>
  );
};

export default UploadCard;
