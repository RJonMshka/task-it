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
    padding: 8px;
    background-image: radial-gradient( circle farthest-corner at 5.6% 54.5%,  rgba(47,71,79,1) 0%, rgba(159,188,198,1) 83.6% );
    display: flex;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    
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
`;