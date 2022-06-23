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
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,103,1) 30%, rgba(29,68,187,1) 76%, rgba(0,156,187,1) 100%);
    
    @media ${devices.tablet} {
        height: ${headerHeight.tablet};
    }

    @media ${devices.laptop} {
        height: ${headerHeight.laptop};
    }

    @media ${devices.desktop} {
        height: ${headerHeight.desktop};
    }
`;