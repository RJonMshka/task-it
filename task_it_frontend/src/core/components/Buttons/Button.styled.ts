import styled, { StyledComponent } from "styled-components";
import { ButtonProps } from "./Button";


export const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 2px;
    padding: 12px 20px;
    font-size: 20px;
    ${ (props) => props.variation === "primary" && `
        color: white;
        background: black;
    ` }

    ${ (props) => props.variation === "secondary" && `
        color: black;
        background: white;
    ` }
`;