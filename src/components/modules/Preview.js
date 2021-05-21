import React from "react";
import Card from "./Card";

const Preview = ({ children }) => {
    return (
        <div className="SFSPreview">
            <Card>
                {children}
            </Card>
        </div>
    );
};

export default Preview;
