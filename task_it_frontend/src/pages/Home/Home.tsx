import React, { FunctionComponent } from 'react';
import Header from '../../core/components/Header/Header';
import PageLayout from '../../core/components/PageLayout/PageLayout';
import { logoBG, logoShape, logoSize } from '../../core/types/headerTypes';
import HomeStyled, { StyledDescription, StyledHeading, StyledHeroBanner, StyledHeroBannerContainer, StyledHeroContentContainer } from './Home.styled';
import logoSvg from "../../assets/images/logo.svg";

const Home: FunctionComponent = () => {
    return <PageLayout>
        <StyledHeroBannerContainer>
            <StyledHeroBanner src={logoSvg} alt="Hero Banner" />
            <StyledHeroContentContainer>
                <StyledHeading>Welcome to Task It!</StyledHeading>
                <StyledDescription>Here you can easily manage all your tasks and respective projects so easily.</StyledDescription>
            </StyledHeroContentContainer>
        </StyledHeroBannerContainer>
        
    </PageLayout>;
}

export default Home;