import React, { FunctionComponent } from "react";
import { JsxElement } from "typescript";
import { FormErrorStyled } from "./FormError.styled";

type FormErrorProps = {
    children: React.ReactNode
}

const FormError: FunctionComponent<FormErrorProps> = ({ children }) => {
    return <FormErrorStyled>
        {children}
    </FormErrorStyled>;
};

export default FormError;