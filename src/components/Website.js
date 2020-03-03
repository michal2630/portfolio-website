import React from "react";

const Website = (props) => (
        <div className="website-card">
            <a href={props.link}>
                <img src={props.image} alt={props.alt}></img>
            </a>
            <div className="text-below-img">
                {props.description}
                <h3>Used tools</h3>
                {props.technology}
            </div>
        </div>
)

export default Website;