import React, { FunctionComponent } from 'react';
import Header from '../../core/components/Header/Header';
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
    }
}
const Home: FunctionComponent = () => {
    return <HomeStyled>
        <Header {...propsObj.headerProps} />
    </HomeStyled>;
}

export default Home;