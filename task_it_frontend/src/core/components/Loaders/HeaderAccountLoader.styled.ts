import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledAHLoaderContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    position: relative;
    right: 50px;
`;

export const StyledAHLoader = styled.div`
    border: 5px solid #fff;
    border-top: 5px solid #5c130e;
    border-radius: 50%;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: 5px;
    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;