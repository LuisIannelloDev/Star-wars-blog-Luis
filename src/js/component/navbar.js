import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top mb-3">
            <Link className="navbar-brand" to="/">
                <img 
                    src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" 
                    alt="Star Wars" 
                    width="120" 
                    height="120" 
                    className="d-inline-block align-top"
                />
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Favorites</button>
                </Link>
            </div>
        </nav>
    );
};
