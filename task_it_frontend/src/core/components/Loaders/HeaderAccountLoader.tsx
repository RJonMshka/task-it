import React, { FunctionComponent } from "react";
import { StyledAHLoader, StyledAHLoaderContainer } from "./HeaderAccountLoader.styled";

const HeaderAccountLoader: FunctionComponent = () => {
    return <StyledAHLoaderContainer>
        <StyledAHLoader />
    </StyledAHLoaderContainer>;
}

export default HeaderAccountLoader;