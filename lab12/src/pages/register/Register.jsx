// import './register.css';
// import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
// import Login from "../login/Login";
// import {Navigate} from "react-router-dom";

// export const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [retypePassword, setRetypePassword] = useState("");
//     const [flag, setFlag] = useState(false);
//     const [login, setLogin] = useState(true);

//     const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
//     if (loggedInUserIndex) {
//         return <Navigate to="/HomePage" />;
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         if (!name || !email || !password || !retypePassword) {
//             setFlag(true);
//             alert("Please fill every field");
//         } else {
//             setFlag(false);

//             const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//             if (existingUsers.some(user => user.email === email)) {
//                 alert("Email is already taken. Please choose another.");
//                 return;
//             }

//             const newUser = {
//                 name,
//                 email,
//                 password,
//             };

//             existingUsers.push(newUser);

//             localStorage.setItem("users", JSON.stringify(existingUsers));

//             console.log("Saved in local storage!");
//             setLogin(!login);
//         }
//     }

//     function handleClick() {
//         setLogin(!login);
//     }

//     return (
//         <div className='container'>
//             {login ? (
//                 <form onSubmit={handleSubmit}>
//                     <h1>Register</h1>
//                     <div className='form-group'>
//                         <label>Username</label>
//                         <input type='text' className='form-control' placeholder='Enter unique username'
//                                onChange={(event) => setName(event.target.value)}
//                         />
//                     </div>
//                     <div className='form-group'>
//                         <label>Email</label>
//                         <input type='email' className='form-control' placeholder='Enter email'
//                                onChange={(event) => setEmail(event.target.value)} />
//                     </div>
//                     <div className='form-group'>
//                         <label>Password</label>
//                         <input type='password' className='form-control' placeholder='Enter password'
//                                onChange={(event) => setPassword(event.target.value)} />
//                     </div>
//                     <div className='form-group'>
//                         <label>Retype password</label>
//                         <input type='password' className='form-control' placeholder='Retype password'
//                                onChange={(event) => setRetypePassword(event.target.value)} />
//                     </div>

//                     <button type='submit' className='btn btn-dark btn-lg btn-block'>SIGN ME UP</button>

//                     <p onClick={handleClick}>Already a member? <a>Sign in</a></p>

//                 </form>
//             ) : (
//                 <Login />
//             )}
//         </div>
//     );
// };

// export default Register;




import './register.css';
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../login/Login";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Register = () => {
    const [login, setLogin] = useState(true);


    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/HomePage" />;
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .required("Username is required"),

        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                "Invalid email format (e.g. example@mail.com)"
            )
            .required("Email is required"),

        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),

        retypePassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Confirm your password"),
    });


    const handleRegisterSubmit = (values, { setSubmitting }) => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (existingUsers.some(user => user.email === values.email)) {
            alert("Email is already taken. Please choose another.");
            setSubmitting(false);
            return;
        }

        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password,
        };

        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        console.log("Saved in local storage!");
        alert("Registration successful!");
        
        
        setLogin(false); 
        setSubmitting(false);
    };

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className='container'>
            {login ? (

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        retypePassword: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleRegisterSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <h1>Register</h1>

                            <div className='form-group'>
                                <label>Username</label>
                                <Field 
                                    type='text' 
                                    name='name' 
                                    className='form-control' 
                                    placeholder='Enter unique username' 
                                />
                                <ErrorMessage name="name" component="div" className="text-danger" />
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <Field 
                                    type='email' 
                                    name='email' 
                                    className='form-control' 
                                    placeholder='Enter email' 
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>

                            <div className='form-group'>
                                <label>Password</label>
                                <Field 
                                    type='password' 
                                    name='password' 
                                    className='form-control' 
                                    placeholder='Enter password' 
                                />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>

                            <div className='form-group'>
                                <label>Retype password</label>
                                <Field 
                                    type='password' 
                                    name='retypePassword' 
                                    className='form-control' 
                                    placeholder='Retype password' 
                                />
                                <ErrorMessage name="retypePassword" component="div" className="text-danger" />
                            </div>

                            <button 
                                type='submit' 
                                className='btn btn-dark btn-lg btn-block'
                                disabled={isSubmitting}
                            >
                                SIGN ME UP
                            </button>

                            <p onClick={handleClick} style={{cursor: 'pointer', marginTop: '10px'}}>
                                Already a member? <span style={{color: 'blue', textDecoration: 'underline'}}>Sign in</span>
                            </p>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Register;