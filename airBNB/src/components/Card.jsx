import React from "react";

export default function Card(props){

    return(
        <div className="card">
            <img className="card--photo" src={props.img}/>
            <div className="card--stats">
            <img className="stats--photo" src={props.image}/> 
            <span>{props.number1}</span> 
            <span>{props.number2}</span>
            <span>{props.town}</span>
            </div>
            <p>{props.title}</p>
            <p>{props.cost}</p>
        </div>
    )
}