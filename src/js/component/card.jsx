import React from "react";

export const Card = ({ name, uid}) => {



    return (
        <div className="card" style={{minWidth: '18rem'}}>
            
            <figure className="card-img-top">
                <img src={''} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <link to={'/details/'+uid} className="btn btn-primary">
                learn more
            </link>
            <button className="btn btn-secondary">
               fav 
            </button>
        </div>
    )
}