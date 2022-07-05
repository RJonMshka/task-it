import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../types/headerTypes";
import { StyledNav } from "./Navigation.styled";


const Nav: FunctionComponent<NavProps> = ({ navLinks }) => {
    return <StyledNav>
        {
            navLinks.map((navLink, idx) => {
                return !navLink.needAuthentication && <Link to={navLink.link} key={idx}>{navLink.text}</Link>
            })
        }
    </StyledNav>
};

export default Nav;