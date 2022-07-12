import { useQuery } from "react-query";
import { API_USER, AUTH_API_AUTHENTICATION, BASE_URL } from "../../utilities/constants";

interface AuthResponse {
    isAuthenticated: boolean
}

const authApi = `/api${AUTH_API_AUTHENTICATION}`;

const fetchAuthentication = () => {
    return window.fetch(
        authApi,
        {
            method: "GET"
        }
    ).then(response => response.json())
}

const useAuthentication = () => {
    return useQuery<AuthResponse, Error>("authentication", fetchAuthentication)
};

export default useAuthentication;