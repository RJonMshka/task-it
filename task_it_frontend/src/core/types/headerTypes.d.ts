export type logoShape = "circle" | "square";
export type logoBG = "dark" | "white" | "transparent";
export type logoSize = "small" | "medium" | "large";


export type NavLinkProps = {
    text: string,
    link: string,
    ariaText?: string,
    needAuthentication: boolean
}

export interface NavProps {
    navLinks: NavLinkProps[]
}

export interface AuthRouteProps {
    routes: NavLinkProps[]
}

export interface HeaderProps {
    navLinks: NavLinkProps[],
    authRouteDetails: AuthRouteProps
}

export interface HeaderAccountProps {
    name: String
}