import React from "react";

export default function Cards(props) {
    console.log(props)
    return (
            <div className="cards-container">
                <div className="card">
                <img className="cards-img" src={`../public/images/${props.item.imageUrl}`} alt="" />
                <div className="card-text-location">
                    <img src="../public/images/location-tag.png" alt="location tag" />
                    <h2>{props.item.title}</h2>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <div className="date-n-description">
                    <h4>From : <span>{`${props.item.startDate}`}</span> To : <span>{`${props.item.endDate}`}</span></h4>
                        <p>
                        Known as the 'City of Canals' there are many things Venice is famous for including its 
                        beautiful bridges, gondola rides, atmospheric streets and carnival celebrations. Built 
                        over 118 islands, Venice and its lagoon is one of the most unique cities in the world.
                        </p>
                </div>
                </div>
            </div>
    );
}
