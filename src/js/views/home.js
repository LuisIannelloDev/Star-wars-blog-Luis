import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";
import "/workspaces/Star-wars-blog-Luis/src/styles/card.css"



export const Home = () => {
	
	const {store, actions} = useContext(Context);

	return(
	<div className="text-center mt-6" style={{paddingTop: '100px', paddingBottom:'100px'}}>
		<div className="container mt-5 d-flex">
         {store.people?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} />)}   
		 </div>
	<div  className="text-center mt-6" style={{paddingTop: '100px', paddingBottom:'20px'}} >
		<div className="container mt-5 d-flex ">
         {store.vehicles?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} />)}   
	    </div>
	</div>		
	</div>
);}