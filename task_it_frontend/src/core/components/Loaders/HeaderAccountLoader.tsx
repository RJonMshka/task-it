import React, { FunctionComponent } from "react";
import { StyledAHLoaderContainer } from "./HeaderAccountLoader.styled";
import { LoaderSpinner } from "./MainLoader.styled";

const HeaderAccountLoader: FunctionComponent = () => {
    return <StyledAHLoaderContainer>
        <LoaderSpinner />
    </StyledAHLoaderContainer>;
}

export default HeaderAccountLoader;