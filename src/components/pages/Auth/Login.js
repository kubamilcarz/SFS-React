import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="SFSPageContainer">
            <h1 className="textCenter bigTitle">Login</h1>
            <div className="containerSmall">
                <form className="SFSForm">
                    <div className="SFSFormInputGroup">
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button
                        type="submit"
                        className="btn btnBig btnPrimary btnForm"
                    >
                        Login
                    </button>
                    <p className="SFSFormInfo">
                        Don't have an account? Create a new one{" "}
                        <Link to="/register">here</Link>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
