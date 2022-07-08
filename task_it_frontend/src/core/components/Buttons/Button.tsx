import React, { FunctionComponent, SyntheticEvent } from "react";
import { StyledButton } from "./Button.styled";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
    onClick?: (e: SyntheticEvent) => void,
    className?: string,
    type?: ButtonType,
    variation: string,
    children: JSX.Element | string
}

const Button: FunctionComponent<ButtonProps> = ({children, ...otherProps}) => {
    return <StyledButton {...otherProps}>{children}</StyledButton>
}; 

export default Button;