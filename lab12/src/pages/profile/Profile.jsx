import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({setLoggedUser}) {
    const navigate = useNavigate();

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = loggedInUserIndex !== null ? users[loggedInUserIndex] : null;

    const handleLogout = () => {
        if (loggedInUserIndex !== null) {
            // users.splice(loggedInUserIndex, 1);

            // localStorage.setItem("users", JSON.stringify(users));

            localStorage.removeItem("loggedInUserIndex");
            setLoggedUser(null);
            navigate("/");

            console.log(`${loggedInUser.name} has signed out.`);
        }
    };

    return (
        <section>
            <div className="success-box">
                Profile
                {loggedInUser && <h2>Welcome, {loggedInUser.name}</h2>}
                <button onClick={handleLogout}>Sign me out</button>
            </div>
        </section>
    );
}

export default Profile;
