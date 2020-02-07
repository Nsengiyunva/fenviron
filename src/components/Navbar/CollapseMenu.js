import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = props => {
    const { open } = ({ open: props.navbarState ? 0: 1 });
    if( props.navbarState === true ){
        return (
            <CollapseWrapper>
                <NavLinks>
                    <li><a href='/' onClick={props.handleNavbar}> Home </a></li>
                    <li><a href='/' onClick={props.handleNavbar}> About Us </a></li>
                    <li><a href='/' onClick={props.handleNavbar}> Services </a></li>
                    <li><a href='/' onClick={props.handleNavbar}> Contact Us </a></li>
                    <li><a href='/' onClick={props.handleNavbar}> Gallery </a></li>
                </NavLinks>
            </CollapseWrapper>
        )
    }
    return null;
}

// export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    background: #2d3436;
    position: fixed;
    top: 8.5rem;
    left: 0;
    right: 0;
    z-index: 10;
`;

const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;

    & li {
        transition: all 300ms linear 0s;
    }
    & a {
        font-size: 1.4rem;
        line-height: 2;
        color: #dfe6e9;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }
    &:hover {
        color: #fdcb6e;
        border-bottom: 1px solid #fdcb6e;
    }
`;

export default CollapseMenu;
    