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
        <h2>Details Page</h2>
        <div className="container d-flex">
            <div>
                <figure>
                    <img src={'https://starwars-visualguide.com/#/characters/${uid}.jpg'} alt={store.peopleDetails?.properties.name} />
                    <figcaption>
                    {store.peopleDetails?.name}
                    </figcaption>
                </figure>
            </div>
            <div>
            <p>{store.peopleDetails?.properties.gender}</p>
            <p>{store.peopleDetails?.properties.eye_color}</p>
            <p>{store.peopleDetails?.properties.height}</p>
            </div>
        </div>
          <p></p>
        </>
    
        
    )
}