// import React, {useEffect, useState} from "react";
// import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Catalog from "./pages/catalog/Catalog";
// import HomePage from "./pages/home/HomePage";
// import Cart from "./pages/cart/Cart";

// import ObjectDetails from "./pages/objectDetails/ObjectDetails";
// import {getStoneList} from "./fetching";
// import Checkout from "./pages/checkout/Checkout";
// import Success from "./pages/success/Success";
// import Login from './pages/login/Login'
// import Register from './pages/register/Register'
// import Profile from "./pages/profile/Profile";
// import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";



// function App() {

//     const [objectsData, setObjectsData] = useState('');
//     const [loggedUser, setLoggedUser] = useState(null);
//     const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");


//     useEffect(() => {
//         setLoggedUser(loggedInUserIndex);
//         getStoneList()
//             .then(response => {
//                 console.log(response)
//                 setObjectsData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//     console.log(objectsData)

//     if(loggedUser) {
//         return (
//             <Router>
//                 <Header />
//                 <Routes>
//                     <Route element={<ProtectedRoutes />}>
//                     <Route path="/HomePage" element={<HomePage />} />
//                     <Route path="/Catalog" element={<Catalog />} />
//                     <Route path="/Catalog/:id" element={ <ObjectDetails objectsData={objectsData} /> } />
//                     <Route path="/Cart" element={<Cart />} />
//                     <Route path="/Checkout" element={<Checkout />} />
//                     <Route path="/Success" element={<Success />} />
//                     <Route path='/Profile' element={<Profile setLoggedUser={setLoggedUser}/>} />
//                     </Route>
//                 </Routes>
//                 <Footer />
//             </Router>
//         );
//     }else{
//         return(
//             <Router>
//                 {/*<Header />*/}
//                 <Routes>
//                     <Route path="/login" element={<Login setLoggedUser={setLoggedUser}/>} />
//                     <Route path="/" element={<Register />} />
//                 </Routes>
//                 {/*<Footer />*/}
//             </Router>
//         );
//     }


// }

// export default App;


import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/home/HomePage";
import Cart from "./pages/cart/Cart";
import ObjectDetails from "./pages/objectDetails/ObjectDetails";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from "./pages/profile/Profile";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes"; 
import {getStoneList} from "./fetching";

function App() {
    const [objectsData, setObjectsData] = useState('');
    const [loggedUser, setLoggedUser] = useState(localStorage.getItem("loggedInUserIndex"));

    useEffect(() => {
        const user = localStorage.getItem("loggedInUserIndex");
        setLoggedUser(user);

        getStoneList()
            .then(response => {
                setObjectsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const handleLoginState = (userIndex) => {
        setLoggedUser(userIndex);
    };

    return (
        <Router>

            {loggedUser && <Header />}
            
            <Routes>
                <Route path="/login" element={
                    !loggedUser ? <Login setLoggedUser={handleLoginState}/> : <Navigate to="/HomePage" />
                } />
                <Route path="/" element={
                    !loggedUser ? <Register /> : <Navigate to="/HomePage" />
                } />

        
                <Route element={<ProtectedRoutes />}>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Catalog" element={<Catalog />} />
                    <Route path="/Catalog/:id" element={<ObjectDetails objectsData={objectsData} />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path='/Profile' element={<Profile setLoggedUser={handleLoginState}/>} />
                </Route>

                
                <Route path="*" element={<Navigate to={loggedUser ? "/HomePage" : "/login"} replace />} />
            </Routes>

            {loggedUser && <Footer />}
        </Router>
    );
}

export default App;