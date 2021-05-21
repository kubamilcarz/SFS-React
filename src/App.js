import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/modules/Footer";

import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Navbar isLoggedIn={IsLoggedIn} />
            <div className="container">  
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/user/:userID">
                        <ProfilePage />
                    </Route>
                </Switch>
            </div>
            <Footer isFullWidth={true} />
        </>
    );
}

export default App;
