import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import Card from "./Card";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonHold from "./ButtonHold";

const Modal = ({ children, closeModal }) => {
    const history = useHistory();
    useEffect(() => {
        return history.listen((loc) => {
            closeModal();
        });
    }, [history, closeModal]);

    return (
        <Card>
            <div className="SFSModal SFSCard">
                <div className="SFSCardClose">
                    <ButtonHold handleOnClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes} />
                    </ButtonHold>
                </div>
                {children}
            </div>
            <div className="SFSModalOverlay" onClick={closeModal}></div>
        </Card>
    );
};

export default Modal;
