import React from "react";

const Website = (props) => (
        <div className="website-card">
            <div className="border-card">
                <a href={props.link}>
                    <img src={props.image} alt={props.alt}></img>
                </a>
                <div className="text-below-img">
                        <a href={props.link}><div className="linkWebsiteCard">Link to website</div></a>
                        {props.description}
                    <div className="additionalDescriptionCard">
                        <h2>Used languages</h2>
                        {props.technology}
                    </div>
                </div>
            </div>
        </div>
)

export default Website;