export const headerProps = {
    navLinks: [
        {
            text: "Home",
            link: "/",
            needAuthentication: false
        },
        {
            text: "Dashboard",
            link: "/dashboard",
            needAuthentication: true
        },
        {
            text: "My Tasks",
            link: "/tasks",
            needAuthentication: true
        },
        {
            text: "My Projects",
            link: "/projects",
            needAuthentication: true
        },
        {
            text: "Tasks per Project",
            link: "/project_tasks",
            needAuthentication: true
        }
    ],
    authRouteDetails: {
        routes: [
            {
                link: "/login",
                text: "Login",
                needAuthentication: false
            },
            {
                link: "/register",
                text: "Sign Up",
                needAuthentication: false
            }
        ]
    }
            
};