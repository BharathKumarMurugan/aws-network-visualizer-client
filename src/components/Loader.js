import React from "react";
import "./table.css";

const Loader = () => {
    return (
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        // <div id="wrapper">
        //     <div className="loading-spinner"></div>
        // </div>
    );
};
export default Loader;
