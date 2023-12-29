import React from "react";
import star from '../images/star.png';
export default function Card(props){
    return(
        <div className="carddiv">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src ={`../images/${props.coverImg}`} className="card-img"></img>
            <div className="card-info">
                <img src={star}></img>
                <span>&nbsp;{props.rating}</span>
                <p>({props.reviewCount}) • {props.location}</p>
            </div>
            <p>{props.title}</p>
            <div className="price-person">
            <p>From ${props.price}&nbsp;</p>
            <p>/ person</p>
            </div>
        </div>
    )
}
