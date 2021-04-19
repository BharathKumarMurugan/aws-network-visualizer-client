import React from "react";
import "./table.css";

function Loader() {
    return (
        // <div className="spinner-border text-primary" role="status">
        //     <span className="sr-only">Loading...</span>
        // </div>
        <div id="wrapper">
            <div className="loading-spinner"></div>
        </div>
    );
}
export default Loader;
