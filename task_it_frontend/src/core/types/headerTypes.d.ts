export type logoShape = "circle" | "square";
export type logoBG = "dark" | "white" | "transparent";
export type logoSize = "small" | "medium" | "large";

export interface LogoDetails {
    shape: logoShape,
    background: logoBG,
    size: logoSize
}

export type PageRoutes = {
    link: string,
    text: string,
    ariaLabel?: string
}

export interface NavProps {
    navLinks: PageRoutes[]
}

export type Authentication = {
    isAuthenticated: boolean,
    routes: PageRoutes[]
}

export interface AuthProps {
    authRouteDetails: Authentication
}


export interface HeaderProps {
    navLinks: PageRoutes[],
    authRouteDetails: Authentication,
    logoDetails: LogoDetails
}