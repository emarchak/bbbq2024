import { useState } from "react";


export const useLogin = () => {
    const expectedPassword = import.meta.env.VITE_PASSWORD as string;
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePasswordSubmit = () => {
        if (password === expectedPassword) {
            setLoggedIn(true);
        } else {
            alert("Incorrect password");
        }
    };

    return { handlePasswordSubmit, password, setPassword, loggedIn };
};
