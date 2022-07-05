import React, { Component, FunctionComponent, PureComponent } from "react";
import { headerProps } from "../../props/Header.props";
import { HeaderProps } from "../../types/headerTypes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { StyledMain } from "./PageLayout.styled";

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children  }) => {
    return <>
        <Header {...headerProps} />
        <StyledMain>{children}</StyledMain>
        <Footer navLinks={headerProps.navLinks} />
    </>;
};

export default PageLayout;