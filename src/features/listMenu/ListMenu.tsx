import React from "react";
import { Menu } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { listMenuActiveState, setListMenuActive } from "./listMenuSlice";

interface Props {
  listItems: string[];
  title: string;
}

export const ListMenu: React.FC<Props> = ({ listItems, title }) => {
  const activeState = useAppSelector(listMenuActiveState);
  const dispatch = useAppDispatch();
  return (
    <Menu secondary vertical>
      <Menu.Item header>{title}</Menu.Item>
      <Menu.Item
        active={activeState === "all"}
        onClick={() => dispatch(setListMenuActive("all"))}
      >
        Show all
      </Menu.Item>
      {listItems.map((item, index) => (
        <Menu.Item
          key={index}
          active={activeState === item}
          onClick={() => dispatch(setListMenuActive(item))}
        >
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default ListMenu;
