import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="SFSPageContainer">
            <h1 className="textCenter bigTitle">Create an Account</h1>
            <div className="containerSmall">
                <form className="SFSForm">
                    <div className="SFSFormInputGroupInline">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="email" placeholder="E-mail" />
                    <div className="SFSFormInputGroupInline">
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat Password" />
                    </div>
                    <input type="date" className="SFSFormInput" />
                    <button
                        type="submit"
                        className="btn btnBig btnPrimary btnForm"
                    >
                        Login
                    </button>
                    <p className="SFSFormInfo">
                        Already have an account?{" "}
                        <Link to="/login">Login instead</Link>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
