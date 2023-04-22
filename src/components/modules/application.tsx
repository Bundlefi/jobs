import { Heading, Pane, SideSheet, Tab, Tablist } from "evergreen-ui";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Paragraph from "../utilities/paragraph";
import TabSwitch from "../utilities/tab-switch";
import AddressCard from "./address-card";
import IdentityCard from "./identity-card";
import UploadCard from "./upload-card";

const Application: FC<{
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  postTitle: string;
}> = ({ isShown, setIsShown, postTitle }) => {
  const [selectedTab, setTab] = useState("Identity");
  const [tabs] = useState(["Identity", "Address", "Profile", "Files"]);

  return (
    <SideSheet
      preventBodyScrolling
      isShown={isShown}
      onCloseComplete={() => setIsShown(false)}
      containerProps={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        width: "100%",
      }}>
      <Pane is="section">
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>{`Apply to ${postTitle}`}</Heading>
            <Paragraph color="muted">
              Optional description or sub title
            </Paragraph>
          </Pane>
          <Pane display="flex" padding={8}>
            <Tablist>
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  isSelected={selectedTab === tab}
                  onSelect={() => setTab(tab)}>
                  {tab}
                </Tab>
              ))}
            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint2" padding={16}>
          <TabSwitch tab={selectedTab}>
            <IdentityCard id="Identity" />
            <AddressCard id="Address" />
            <UploadCard id="Files" />
          </TabSwitch>
        </Pane>
      </Pane>
    </SideSheet>
  );
};

export default Application;
