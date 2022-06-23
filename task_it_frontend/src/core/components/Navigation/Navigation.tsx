import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../types/headerTypes";


const Nav: FunctionComponent<NavProps> = ({ navLinks }) => {
    return <nav>
        {
            navLinks.map((navLink, idx) => {
                return <Link to={navLink.link} key={idx}>{navLink.text}</Link>
            })
        }
    </nav>
};

export default Nav;