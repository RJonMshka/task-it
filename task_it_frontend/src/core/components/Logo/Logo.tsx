import React, { FunctionComponent } from "react";
import LogoStyled from "./Logo.styled";
import logoSvg from "../../../assets/images/logo.svg";
import { LogoDetails } from "../../types/headerTypes";

const Logo: FunctionComponent<LogoDetails> = (props) => {
    return <LogoStyled src={logoSvg} alt="app logo" />
};

export default Logo;