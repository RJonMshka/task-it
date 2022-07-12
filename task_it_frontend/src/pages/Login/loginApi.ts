import { API_PATH, AUTH_API_LOGIN } from "../../utilities/constants";
import { LoginRequestData } from "./Login"

interface LoginResponse {
    id: Number,
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    roles: String[]
}

const loginApiUrl = `${API_PATH}${AUTH_API_LOGIN}`;

async function handleLoginResponse(response: Response): Promise<LoginResponse> {
    const data = response.json();

    console.log(response.headers);

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