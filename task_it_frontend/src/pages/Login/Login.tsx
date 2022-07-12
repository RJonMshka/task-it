import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../core/components/Buttons/Button';
import FormError from '../../core/components/Forms/Errors/FormError';
import InputField from '../../core/components/InputFields/InputField';
import PageLayout from '../../core/components/PageLayout/PageLayout';
import { AUTH_API_LOGIN, BASE_URL } from '../../utilities/constants';
import LoginStyled, { FormGroup, FromLabel } from './Login.styled';
import { loginWithCredentials } from './loginApi';
import useLoginForm from './useLoginForm';

export interface LoginRequestData {
    username: String,
    password: String
}

type LoginFormError = String | null;

const initialState = {
    username: "",
    password: ""
}

const Login: FunctionComponent = () => {

    const { username, password, setUsername, setPassword } = useLoginForm(initialState.username, initialState.password);

    const [error, setError] = useState<LoginFormError>(null);

    const navigate = useNavigate();

    const changeFields = (e: React.FormEvent<HTMLInputElement>, setInputState: React.Dispatch<React.SetStateAction<string>>) => {
        setInputState(e.currentTarget.value);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = {
            username,
            password
        };

        try {
            await loginWithCredentials(formData);
            navigate("/");
        } catch (err) {
            setError("Invalid Login Credentials");
        }
    }

    return <PageLayout>
        <LoginStyled>
            <h1>Login Form</h1>
            <form method='POST' action={`${BASE_URL}${AUTH_API_LOGIN}`} onSubmit={handleSubmit}>
                <FormGroup>
                    <FromLabel htmlFor="username">USERNAME</FromLabel>
                    <InputField type="text" name="username" id="username" value={username} onChange={ e => changeFields(e, setUsername)} placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <FromLabel htmlFor="password">PASSWORD</FromLabel>
                    <InputField type="password" name="password" id="password" value={password} onChange={ e => changeFields(e, setPassword)} placeholder="Password" />
                </FormGroup>
                {error && <FormGroup>
                    <FormError>{error}</FormError>
                </FormGroup> }
                <FormGroup>
                    <Button type='submit' variation='primary'>LOGIN</Button>
                </FormGroup>
            </form>
        </LoginStyled>
    </PageLayout>;
}

export default Login;