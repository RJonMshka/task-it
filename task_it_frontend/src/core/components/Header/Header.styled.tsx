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
`;

export const NavContainer = styled.div`
`;

export const AccountLinksContainer = styled.div`
`;