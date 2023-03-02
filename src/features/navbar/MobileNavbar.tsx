import React, {useState} from "react";
import { Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { navbarActiveState, setActive } from "./navbarSlice";

function Overlay() {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.795)",
            position: "fixed",
            height: "110vh",
            width: "100%",
            zIndex: 2
        }} />
    )
}
export const MobileNavbar = () => {
    const activeState = useAppSelector(navbarActiveState);
    const [hideMenu, setHideMenu] = useState(true)
    const dispatch = useAppDispatch();

    return (
        <>
            {!hideMenu && <Overlay />}
            <Sidebar
                as={Menu}
                animation='overlay'
                inverted
                onHide={() => setHideMenu(true)}
                vertical
                visible={!hideMenu}
                height='100%'
                >
                <Menu.Menu position="right">
                    <Menu.Item
                        name="adoption"
                        active={activeState === "adoption"}
                        onClick={() => dispatch(setActive("adoption")) && setHideMenu(true)}
                        as={Link}
                        to="/adoption"
                    >
                        Adoption
                    </Menu.Item>
                    <Menu.Item
                        name="admin"
                        active={activeState === "admin"}
                        onClick={() => dispatch(setActive("admin")) && setHideMenu(true)}
                        as={Link}
                        to="/admin"
                    >
                        Adopt Admin
                    </Menu.Item>
                    <Menu.Item
                        name="contact"
                        active={activeState === "contact"}
                        onClick={() => dispatch(setActive("contact")) && setHideMenu(true)}
                        as={Link}
                        to="https://github.com/vinchbr/vinchdev"
                        target='_blank'
                    >
                        <Icon name='github' size='large'/>
                        Github
                    </Menu.Item>
                </Menu.Menu>
            </Sidebar>
            <Sidebar.Pusher dimmed={!hideMenu}>
                <Segment
                    inverted
                    textAlign='center'
                    vertical
                >
                        <Menu inverted secondary size='large'>
                            <Menu.Item onClick={() => setHideMenu(false)}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                            <Menu.Item
                                header
                                name="home"
                                className="logo"
                                onClick={() => dispatch(setActive("home"))}
                                as={Link}
                                to="/"
                                position='right'
                            >
                                Vicenzo Naves
                            </Menu.Item>
                        </Menu>
                </Segment>
            </Sidebar.Pusher>
        </>
    );
};
