import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    //const params = useParams()
    const {uid} = useParams()
    const {store, actions} = useContext(Context);  
    useEffect(()=>{
        actions.getPeopleDetails(uid)
    },[])         

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
    <p>{store.peopleDetails?.description}</p>
</div>
        </>
    
        
    )
}