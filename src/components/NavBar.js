import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const NavStyle = {
        textDecoration: "none",
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link to="/" style={NavStyle}>
                    <a class="navbar-brand">Logo</a>
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/" style={NavStyle}>
                            <li class="nav-item">
                                <a class="nav-link">Home</a>
                            </li>
                        </Link>
                        <Link to="/vpc" style={NavStyle}>
                            <li class="nav-item">
                                <a class="nav-link">VPC</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
