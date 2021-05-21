import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonHold from "./modules/ButtonHold";
import Modal from "./modules/Modal";
import Register from "./pages/Auth/Register";
import SearchBar from "./SearchBar";
import classes from "./styles/Navbar.module.sass";
import { APP_NAME } from "./utilities/constants";

const Navbar = ({ isLoggedIn }) => {
    const [isOpen, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen((prev) => !prev);
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
                            <Link to="/login">
                                <ButtonHold className="btnBig btnPrimary">
                                    Login
                                </ButtonHold>
                            </Link>
                            <ButtonHold
                                className="btnBig"
                                handleOnClick={toggleModal}
                            >
                                Register
                            </ButtonHold>
                        </div>
                    )}
                </div>
            </nav>
            {isOpen && (
                <Modal closeModal={toggleModal}>
                    <Register />
                </Modal>
            )}
        </header>
    );
};

export default Navbar;
