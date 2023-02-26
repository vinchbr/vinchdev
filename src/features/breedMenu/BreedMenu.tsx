import React from "react";
import { Menu } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { breedMenuActiveState, setBreedMenuActive } from "./breedMenuSlice";

interface Props {
  categories: string[];
}
export const BreedMenu: React.FC<Props> = ({ categories }) => {
  const activeState = useAppSelector(breedMenuActiveState);
  const dispatch = useAppDispatch();
  return (
    <Menu fluid text vertical>
      <Menu.Item header>Available Breeds</Menu.Item>
      <Menu.Item
        active={activeState === "all"}
        onClick={() => dispatch(setBreedMenuActive("all"))}
      >
        All Breeds
      </Menu.Item>
      {categories.map((category, index) => (
        <Menu.Item
          key={index}
          fitted="horizontally"
          active={activeState === category}
          onClick={() => dispatch(setBreedMenuActive(category))}
        >
          {category}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BreedMenu;
