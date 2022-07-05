import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { devices } from "../../../utilities/StyledUtilities";

const headerHeight = {
    mobile: "60px",
    tablet: "80px",
    laptop: "100px",
    desktop: "120px"
}

export default styled.header`
    height: ${headerHeight.mobile};
    background-color:  background: rgb(2,0,36);
    padding: 8px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,103,1) 30%, rgba(29,68,187,1) 76%, rgba(0,156,187,1) 100%);
    display: flex;
    position: relative;
    
    @media ${devices.tablet} {
        height: ${headerHeight.tablet};
    }

    @media ${devices.laptop} {
        height: ${headerHeight.laptop};
        padding: 8px 16px;
    }

    @media ${devices.desktop} {
        height: ${headerHeight.desktop};
        padding: 16px;
    }
`;

export const LogoContainer = styled.div`
    width: 60px;
    height: 60px;

    @media ${devices.tablet} {
        width: 70px;
        height: 70px;
    }

    @media ${devices.laptop} {
        width: 80px;
        height: 80px;
    }

    a {
        display: inline-block;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 32px;
    flex: 1;
`;

export const AccountLinksContainer = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-left: 8px;
        font-size: 20px;
        padding: 8px 16px;
        background: #520b5e;
        border-radius: 8px;
    }
`;