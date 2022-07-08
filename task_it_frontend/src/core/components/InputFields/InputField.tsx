import React, { FormEvent, FunctionComponent, SyntheticEvent } from "react";
import { StyledInput } from "./InputField.styled";

interface InputFieldProps {
    type: string,
    name: string,
    id?: string,
    className?: string | undefined,
    onChange?: (e: SyntheticEvent) => void,
    defaultValue?: string,
    value?: string,
    placeholder?: string | ""
}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
    return <StyledInput {...props} />
}

export default InputField;