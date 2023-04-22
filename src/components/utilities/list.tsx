import React, { FC, PropsWithChildren } from "react";
import {
  ListItem as EG_ListItem,
  UnorderedList as EG_UnorderedList,
} from "evergreen-ui";

export const UnorderedList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <EG_UnorderedList marginLeft="3rem" marginTop={16}>
      {children}
    </EG_UnorderedList>
  );
};

export const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <EG_ListItem>{children}</EG_ListItem>;
};

const List = { UnorderedList, ListItem };
export default List;
