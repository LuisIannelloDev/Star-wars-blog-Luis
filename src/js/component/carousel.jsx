import React from "react";
import Card from "./card.jsx";

export const Carousel = ({ items }) => {
    return (
        <div id="cardCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <div key={item.uid} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="d-flex justify-content-center">
                            <Card name={item.name} uid={item.uid} />
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#cardCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#cardCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};
