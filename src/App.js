import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/modules/Footer";

import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import ProfilePage from "./components/pages/ProfilePage";
import ProfileRepostsPage from "./components/pages/ProfileRepostsPage";
import ProfileLikesPage from "./components/pages/ProfileLikesPage";
import ProfilePhotosPage from "./components/pages/ProfilePhotosPage";

function App() {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Navbar isLoggedIn={IsLoggedIn} />
            <div className="container">  
                <Switch>
                    <Route path="/" exact component={HomePage} />

                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />

                    <Route path="/user/:userID" exact component={ProfilePage} />

                    <Route path="/user/:userID/reposts" component={ProfileRepostsPage} />
                    <Route path="/user/:userID/likes" component={ProfileLikesPage} />
                    <Route path="/user/:userID/photos" component={ProfilePhotosPage} />
                </Switch>
            </div>
            <Footer isFullWidth={true} />
        </>
    );
}

export default App;
