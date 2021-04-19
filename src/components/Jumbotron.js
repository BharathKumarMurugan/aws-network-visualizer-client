import React from "react";

function Jumbotron() {
    return (
        <div className="p-5 mb-4 bg-light">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                    AWS Infrastructure Visualizer
                </h1>
                <div className="clearfix">
                    <p className="float-start">Account Name</p>
                    <p className="float-end">Region Name</p>
                </div>
                <p className="col-md-8 fs-4">
                    A Tool to visualize Amazon Cloud Infrastructure.
                </p>
            </div>
        </div>
    );
}
export default Jumbotron;
