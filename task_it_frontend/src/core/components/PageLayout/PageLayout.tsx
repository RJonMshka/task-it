import React, { Component, FunctionComponent, PureComponent } from "react";
import { HeaderProps } from "../../types/headerTypes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { StyledMain } from "./PageLayout.styled";

interface PageLayoutProps {
    headerProps: HeaderProps,
    children: JSX.Element,
    footerProps: {}
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children, headerProps  }) => {
    return <>
        <Header {...headerProps} />
        <StyledMain>{children}</StyledMain>
        <Footer />
    </>;
};

export default PageLayout;