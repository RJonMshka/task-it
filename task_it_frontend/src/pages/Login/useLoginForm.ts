import React, { useState } from "react";

const useLoginForm = (initialUsername = "", initialPassword = "") => {
    const [username, setUsername] = useState(initialUsername);
    const [password, setPassword] = useState(initialPassword);

    return {
        username,
        setUsername,
        password,
        setPassword
    }
};

export default useLoginForm;