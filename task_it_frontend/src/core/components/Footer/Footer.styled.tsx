import styled from "styled-components";

export const StyledFooter = styled.footer`
    min-height: 100px;
    position: relative;
    bottom: 0px;
    background: black;
    color: white;
    padding: 16px;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    a {
        display: inline-block;
        padding-right: 24px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FooterMarkContainer = styled.div`
    display: flex;
    margin-top: 32px;
`;

export const FooterMark = styled.div`
    margin: auto;
`;  