import db from '../../data/data.json';
import { useParams } from "react-router";
import { useState } from 'react';
import './TourDetails.css'

function TourDetails() {
    const { id } = useParams();
    const [limit, isLimited] = useState(true);
    return (
        <>
            {
                db.filter((obj) => {
                    return obj.id === id
                }).map((obj) => {
                    return <div>
                        <div className="tour-section">
                            <img src={obj.image} alt={obj.name} className="tour-image" />
                            <div className="tour-content">
                                <h1 className="tour-name">{obj.name}</h1>
                                <hr></hr>
                                <h2 className="tour-price">Price : {obj.price + "$"}</h2>
                                {limit ? <p className="tour-description">
                                    {obj.info.substring(0,350) + "....."}
                                </p> : <p className="tour-description">
                                    {obj.info}
                                </p>}
                                <button className="see-more-button" onClick={() => isLimited(!limit)}>{limit ? "See More" : "See Less"}</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}
export default TourDetails;