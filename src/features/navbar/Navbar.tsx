import React from "react";
import {Icon, Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { navbarActiveState, setActive } from "./navbarSlice";

export const Navbar = () => {
  const activeState = useAppSelector(navbarActiveState);
  const dispatch = useAppDispatch();

  return (
    <>
      <Menu fixed="top" inverted>
        <Menu.Item
          header
          name="home"
          className="logo"
          onClick={() => dispatch(setActive("home"))}
          as={Link}
          to="/"
        >
          Vicenzo Naves
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="adoption"
            active={activeState === "adoption"}
            onClick={() => dispatch(setActive("adoption"))}
            as={Link}
            to="/adoption"
          >
            Adoption
          </Menu.Item>
          <Menu.Item
            name="admin"
            active={activeState === "admin"}
            onClick={() => dispatch(setActive("admin"))}
            as={Link}
            to="/admin"
          >
            Adopt Admin
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={activeState === "contact"}
            onClick={() => dispatch(setActive("contact"))}
            as={Link}
            to="https://github.com/vinchbr/vinchdev"
            target='_blank'
          >
            <Icon name='github' size='large'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};
