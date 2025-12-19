import React from "react";
import { useNavigate } from "react-router-dom";

function Secret({ logout, ...rest }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <h1>Secret</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default Secret;
