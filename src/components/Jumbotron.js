import React from "react";

function Jumbotron() {
    return (
        <div class="p-5 mb-4 bg-light">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">AWS Infrastructure Visualizer</h1>
                <div class="clearfix">
                    <p class="float-start">Account Name</p>
                    <p class="float-end">Region Name</p>
                </div>
                <p class="col-md-8 fs-4">
                    A Tool to visualize Amazon Cloud Infrastructure.
                </p>
            </div>
        </div>
    );
}
export default Jumbotron;
