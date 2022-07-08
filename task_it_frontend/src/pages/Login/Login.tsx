import React, { FunctionComponent } from 'react';
import Button from '../../core/components/Buttons/Button';
import InputField from '../../core/components/InputFields/InputField';
import PageLayout from '../../core/components/PageLayout/PageLayout';
import LoginStyled, { FormGroup, FromLabel } from './Login.styled';

const Login: FunctionComponent = () => {
    return <PageLayout>
        <LoginStyled>
            <h1>Login Form</h1>
            <form>
                <FormGroup>
                    <FromLabel htmlFor="username">USERNAME</FromLabel>
                    <InputField type="text" name="username" id="username" value="" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <FromLabel htmlFor="password">PASSWORD</FromLabel>
                    <InputField type="password" name="password" id="password" value="" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Button type='submit' variation='primary'>LOGIN</Button>
                </FormGroup>
            </form>
        </LoginStyled>
    </PageLayout>;
}

export default Login;