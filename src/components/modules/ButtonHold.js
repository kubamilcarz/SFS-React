import React from "react";

const ButtonHold = ({ children, className, handleOnClick }) => {
    const handleMouseLeave = () => {
        document.activeElement.blur();
    };
    return (
        <button
            className={`btn btnHold ${className}`}
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClick}
        >
            { children }
        </button>
    );
};

export default ButtonHold;
