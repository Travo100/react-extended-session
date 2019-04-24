import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
            className="chi-card col-md-4"
            style={{ backgroundImage: `url(${props.image})` }}
            onClick={() => props.handleCardClick(props.id)}
        >
            <p>{props.id} : {props.name}</p>
        </div>
    )
}

export default Card;