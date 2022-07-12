import { useQuery } from "react-query";
import { API_PATH, AUTH_API_AUTHENTICATION } from "../../utilities/constants";

interface AuthResponse {
    isAuthenticated: boolean
}

const authApi = `${API_PATH}${AUTH_API_AUTHENTICATION}`;

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