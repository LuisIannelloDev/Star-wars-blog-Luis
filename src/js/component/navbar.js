import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top mb-3">
            <Link className="navbar-brand" to="/">
                <img 
                    src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" 
                    alt="Star Wars" 
                    width="50" 
                    height="50" 
                    className="d-inline-block align-top"
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {/* Dropdown menu links */}
                        <li><Link className="dropdown-item" to="/favorite/1">Favorite 1</Link></li>
                        <li><Link className="dropdown-item" to="/favorite/2">Favorite 2</Link></li>
                        <li><Link className="dropdown-item" to="/favorite/3">Favorite 3</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

