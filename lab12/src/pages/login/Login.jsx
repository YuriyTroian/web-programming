// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// import './login.css';

// function Login({setLoggedUser}) {
//     const [emaillog, setEmaillog] = useState('');
//     const [passwordlog, setPasswordlog] = useState('');
//     const [flag, setFlag] = useState(false);
//     const [home, setHome] = useState(true);

//     const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
//     if (loggedInUserIndex) {
//         return <Navigate to="/HomePage" />;
//     }


//     const handleLogin = (e) => {
//         e.preventDefault();

//         const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//         if (existingUsers.length === 0) {
//             setFlag(true);
//             alert('No user data found. Please sign up.');
//             return;
//         }

//         const user = existingUsers.find((user) => user.email === emaillog);

//         if (!emaillog || !passwordlog || !user || user.password !== passwordlog) {
//             setFlag(true);
//             alert('Enter valid email and password.');
//         } else {
//             // setLoggedUser(existingUsers.indexOf(user));
//             localStorage.setItem('loggedInUserIndex', existingUsers.indexOf(user));
//             window.location.reload();
//             setHome(!home);
//             setFlag(false);

//         }
//     }

//     return (
//         <div className="container">
//             {home ? (
//                 <form onSubmit={handleLogin}>
//                     <h1>Login</h1>
//                     <div className="form-group">
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter email"
//                             onChange={(event) => setEmaillog(event.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter password"
//                             onChange={(event) => setPasswordlog(event.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-dark btn-lg btn-block">
//                         LOGIN ME
//                     </button>
//                     <p>
//                         You are not a member? <a href={'/'}>Sign up</a>
//                     </p>
//                 </form>
//             ) : (
//                 <Navigate to="/HomePage" />
//             )}
//         </div>
//     );
// }

// export default Login;




import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/HomePage" />;
    }


    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                "Invalid email format"
            )
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required'),
    });

    const handleLoginSubmit = (values, { setSubmitting }) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        if (existingUsers.length === 0) {
            alert('No user data found. Please sign up.');
            setSubmitting(false);
            return;
        }

        const user = existingUsers.find((user) => user.email === values.email);

        if (!user || user.password !== values.password) {
            alert('Invalid email or password.');
            setSubmitting(false);
        } else {
            localStorage.setItem('loggedInUserIndex', existingUsers.indexOf(user));
            
            setSubmitting(false);
            

            navigate('/HomePage');
        }
    };

    return (
        <div className="container">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLoginSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <h1>Login</h1>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                            <ErrorMessage name="email" component="div" className="error-text" style={{color: 'red', marginTop: '5px'}} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                            <ErrorMessage name="password" component="div" className="error-text" style={{color: 'red', marginTop: '5px'}} />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-dark btn-lg btn-block"
                            disabled={isSubmitting}
                        >
                            LOGIN ME
                        </button>
                        
                        <p style={{marginTop: '15px'}}>
                            You are not a member? <Link to="/register">Sign up</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;