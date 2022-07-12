import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledAHLoaderContainer = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: white;
    position: relative;
    right: 50px;
`;

export const StyledAHLoader = styled.div`
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