import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import {useAppDispatch, useAppSelector} from '../../app/hooks';

import {navbarActiveState, setActive} from './navbarSlice';

export function Navbar() {
    const activeState = useAppSelector(navbarActiveState);
    const dispatch = useAppDispatch();

    return (
        <>
            <Menu attached='top' stackable>
                <Menu.Item
                    header
                    name='home'
                    className='logo'
                    onClick={ () => dispatch(setActive('home'))}
                    as={Link}
                    to='/'
                >
                    Vicenzo Naves
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='adoption'
                        active={activeState === 'adoption'}
                        onClick={ () => dispatch(setActive('adoption')) }
                        as={Link}
                        to='/adoption'
                    >
                        Adoption
                    </Menu.Item>
                    <Menu.Item
                        name='admin'
                        active={activeState === 'admin'}
                        onClick={ () => dispatch(setActive('admin')) }
                        as={Link}
                        to='/admin'
                    >
                        Adopt Admin
                    </Menu.Item>
                    <Menu.Item
                        name='contact'
                        active={activeState === 'contact'}
                        onClick={ () => dispatch(setActive('contact')) }
                        as={Link}
                        to='/contact'
                    >
                        Contact
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </>
    )
}
