import { useQuery } from "react-query";


const fetchAuthentication = () => {
    return fetch("localhost:8080/api/user")
}

export const useAuthentication = (onSuccess: (successData: object) => void, onError: (successData: object) => void) => {
    useQuery("authentication", fetchAuthentication, {
        onSuccess,
        onError
    })
}