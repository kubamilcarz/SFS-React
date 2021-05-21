import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonHold from "./modules/ButtonHold";
import Modal from "./modules/Modal";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SearchBar from "./SearchBar";
import classes from "./styles/Navbar.module.sass";
import { APP_NAME } from "./utilities/constants";

const Navbar = ({ isLoggedIn }) => {
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const toggleRegisterModal = () => {
        setRegisterOpen((prev) => !prev);
    };
    const toggleLoginModal = () => {
        setLoginOpen((prev) => !prev);
    };

    return (
        <header>
            <nav className={classes.navbar}>
                <div className={classes.navbarSide}>
                    <Link to="/" className="unlink">
                        <div className={classes.navbarLogo}>
                            <h1>{APP_NAME}</h1>
                        </div>
                    </Link>
                    {isLoggedIn && <SearchBar showSuggestions={true} />}
                </div>
                <div className={classes.navbarActionItems}>
                    {isLoggedIn ? null : (
                        <div className={classes.navbarActionBtns}>
                            <ButtonHold className="btnBig btnPrimary" handleOnClick={toggleLoginModal}>
                                Login
                            </ButtonHold>
                            <ButtonHold
                                className="btnBig"
                                handleOnClick={toggleRegisterModal}
                            >
                                Register
                            </ButtonHold>
                        </div>
                    )}
                </div>
            </nav>
            {isRegisterOpen && (
                <Modal
                    className="modalNotFullHeight"
                    closeModal={toggleRegisterModal}
                >
                    <Register />
                </Modal>
            )}
            {isLoginOpen && (
                <Modal
                    className="modalNotFullHeight"
                    closeModal={toggleLoginModal}
                >
                    <Login />
                </Modal>
            )}
        </header>
    );
};

export default Navbar;
