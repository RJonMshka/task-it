import React, { FunctionComponent } from "react";
import LogoStyled from "./Logo.styled";
import logoSvg from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo: FunctionComponent = (props) => {
    return <Link to={"/"}>
        <LogoStyled src={logoSvg} alt="app logo" />
    </Link>
};

export default Logo;