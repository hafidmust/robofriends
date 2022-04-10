import React from "react";

import "tachyons";
const Card = ({id,name,email}) =>{
    return(
        <div className="dib bg-light-green pa2 ma3 br4 shadow-2 grow">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;