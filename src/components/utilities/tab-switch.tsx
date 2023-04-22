import React from "react";

interface TabSwitchProps {
  tab: string;
  children: React.ReactNode[];
}

export interface TabSwitchAppliedProps {
  path?: string;
  display?: boolean;
}

const TabSwitch = ({ children, tab }: TabSwitchProps) => {
  let match = false;
  let element: React.ReactElement = {} as React.ReactElement;

  React.Children.forEach(children, (child) => {
    if (!match && React.isValidElement(child)) {
      element = child;
      match = tab === child.props.id;
    }
  });

  return match
    ? React.cloneElement(element, {
        path: tab,
        display: match,
      })
    : null;
};

export default TabSwitch;
