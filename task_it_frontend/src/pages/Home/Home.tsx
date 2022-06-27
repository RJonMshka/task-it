import React, { FunctionComponent } from 'react';
import Header from '../../core/components/Header/Header';
import PageLayout from '../../core/components/PageLayout/PageLayout';
import { logoBG, logoShape, logoSize } from '../../core/types/headerTypes';
import HomeStyled from './Home.styled';



const propsObj = {
    headerProps: {
        navLinks: [
            {
                text: "Home",
                link: "/"
            },
            {
                text: "Dashboard",
                link: "/dashboard"
            }
        ],
        authRouteDetails: {
            isAuthenticated: false,
            routes: [
                {
                    link: "/login",
                    text: "Login"
                }
            ]
        },
        logoDetails: {
            shape: "square" as logoShape,
            background: "transparent" as logoBG,
            size: "medium" as logoSize
        }
    },
    mainProps: {},
    footerProps: {}
}
const Home: FunctionComponent = () => {
    return <PageLayout {...propsObj}>
        <>dxvxcvxcv</>
    </PageLayout>;
}

export default Home;