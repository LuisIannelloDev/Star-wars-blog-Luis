import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeopleDetails(uid);
    }, [uid, actions]);

    return (
        <>
            <h2 className="text-center my-4">Details Page</h2>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
                        className="card-img-top" 
                        alt={store.peopleDetails?.properties.name} 
                    />
                    <div className="card-body">
                        <h5 className="card-title text-center">{store.peopleDetails?.properties.name}</h5>
                    </div>
                </div>
                <div className="card m-3 p-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <p className="card-text"><strong>Gender: </strong>{store.peopleDetails?.properties.gender}</p>
                        <p className="card-text"><strong>Eye Color: </strong>{store.peopleDetails?.properties.eye_color}</p>
                        <p className="card-text"><strong>Height: </strong>{store.peopleDetails?.properties.height}</p>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <h3>Vehicles</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    {store.peopleDetails?.vehicles.length > 0 ? (
                        store.peopleDetails.vehicles.map((vehicles, index) => (
                            <div key={index} className="card m-3" style={{ width: "18rem" }}>
                                <img 
                                    src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} 
                                    className="card-img-top" 
                                    alt={vehicles.name} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{vehicles.name}</h5>
                                    <p className="card-text"><strong>Model: </strong>{vehicles.model}</p>
                                    <p className="card-text"><strong>Manufacturer: </strong>{vehicles.manufacturer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No starships available.</p>
                    )}
                </div>
            </div>
            <div className="container mt-4">
                <p>{store.peopleDetails?.description}</p>
            </div>
        </>
    );
};
