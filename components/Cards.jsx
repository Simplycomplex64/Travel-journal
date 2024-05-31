import React from "react";

export default function Cards(props) {
    return (
            <div className="cards-container">
                <div className="card">
                <img className="cards-img" src={`../public/image/${props.item.imageUrl}`} alt="" />
                <div className="card-text-location">
                    <img src="../public/image/location-tag.png" alt="location tag" />
                    <div className="title-control">
                        <h2>{props.item.title}</h2>
                    </div>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <div className="date-n-description">
                    <h4>From : <span>{`${props.item.startDate}`}</span> To : <span>{`${props.item.endDate}`}</span></h4>
                    <div className="description">
                    <p>{`${props.item.description}`}</p>
                    </div>
                </div>
                </div>
            </div>
    );
}
