import { AUTH_API_LOGIN, BASE_URL } from "../../utilities/constants";
import { LoginRequestData } from "./Login"

interface LoginResponse {
    id: Number,
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    roles: String[]
}

const loginApiUrl = `${BASE_URL}${AUTH_API_LOGIN}`;

async function handleLoginResponse(response: Response): Promise<LoginResponse> {
    const data = response.json();

    if(response.ok) {
        return data;
    } else {
        return Promise.reject(data);
    }
}

export async function loginWithCredentials(data: LoginRequestData): Promise<LoginResponse> {
    return await window.fetch(loginApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(handleLoginResponse);
}