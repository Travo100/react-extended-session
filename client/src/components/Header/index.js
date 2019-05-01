import React from "react";
import "./style.css";

function Header(props) {
    return(
        <header>
            <p>Tally: {props.tally}</p>
            <p>Score: {props.score}</p>
        </header>
    )
}

export default Header