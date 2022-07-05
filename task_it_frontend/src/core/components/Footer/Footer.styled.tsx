import styled from "styled-components";

export const StyledFooter = styled.footer`
    min-height: 100px;
    position: relative;
    bottom: 0px;
    background: black;
    color: white;
    padding: 16px;
    display: flex;

    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        padding-right: 24px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FooterLinksContainer = styled.div`
`;

export const FooterMarkContainer = styled.div`
`;