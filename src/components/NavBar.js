import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const NavStyle = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Logo
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" style={NavStyle}>
                            <li className="nav-item">
                                <span className="nav-link">Home</span>
                            </li>
                        </Link>
                        <Link to="/vpc" style={NavStyle}>
                            <li className="nav-item">
                                <span className="nav-link">VPC</span>
                            </li>
                        </Link>
                        <Link to="/elb" style={NavStyle}>
                            <li className="nav-item">
                                <span className="nav-link">ELB</span>
                            </li>
                        </Link>
                        <Link to="/transitgateway" style={NavStyle}>
                            <li className="nav-item">
                                <span className="nav-link">
                                    Tranist Gateway
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
