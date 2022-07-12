import React from "react";
import styled, { keyframes } from "styled-components";
import { centerAligned } from "../../../utilities/StyledUtilities";

export const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const MainLoaderContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    ${centerAligned}
`;

export const LoaderSpinner = styled.div`
    border: 2px solid #fff;
    border-top: 2px solid #8889d2;
    border-radius: 50%;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    margin: 2px;
    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

export const MainLoaderText = styled.p`
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
`;