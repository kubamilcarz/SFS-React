import React from "react";
import Card from "./Card";

const Preview = ({ children, className }) => {
    return (
        <div className={`SFSPreview ${className}`}>
            <Card>
                {children}
            </Card>
        </div>
    );
};

export default Preview;
