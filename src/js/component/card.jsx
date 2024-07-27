import React from "react";
import { Link } from "react-router-dom";


export const Card = ({ name, uid }) => {
    return (
        <div className="card m-3" style={{ minWidth: '18rem' }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
                alt={name} 
                className="card-img-top" 
            />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${uid}`} className="btn btn-primary">
                        Learn More
                    </Link>
                    <button className="heart-button">
                        <i className="bi bi-heart-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

