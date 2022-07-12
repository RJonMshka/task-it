import styled from "styled-components";

export const HeaderAccountContainer = styled.div`
    background: transparent;
    position: relative;
    right: 100px;

    svg {
        width: 48px;
        height: 48px;
        margin-right: 8px;
    }

    a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;  
    }

    span {
        font-size: 18px;
        font-weight: 500;
        color: #000;
    }
`;