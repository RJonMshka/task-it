import React, { FunctionComponent } from "react";
import { LoaderSpinner, MainLoaderContainer, MainLoaderText } from "./MainLoader.styled";

interface MainLoaderProps {
    text: String
}

 const MainLoader: FunctionComponent<MainLoaderProps> = ({ text }) => {
    return <MainLoaderContainer>
        <LoaderSpinner />
        <MainLoaderText>{text}</MainLoaderText>
    </MainLoaderContainer>;
}

export default MainLoader;