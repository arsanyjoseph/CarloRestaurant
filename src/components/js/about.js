import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import '../css/about.css';

export default function About () {
    const info = useSelector((state)=> state.restaurantInfo)
    useEffect(()=> {
        console.log(info)
    },[info])
    return (
        <div className="aboutContainer">
            <h1>About Us</h1>
            <div className="aboutDetailsContainer">
                <p>Established in 1990, Ousmane's Restaurant is a place of Authentic Experience. Because of the calm and relaxing environment, It's the perfect choice for a quick Family gathering.</p>
                <h4>Why Choose Ousmane's Restaraurant ?</h4>
                <p>Because WE CARE !!...</p>
                <h4>Please Note that:</h4>
                <p>- Reservations are available for Families of 8+ Members.</p>
                <p>- We delightfully announce the opening of a cozy Kids Area at the Back side of the lounge.</p>
                <h4>Internships for Culinary Students are availabe... Submit a "Contact Us" Form titled with "Culinary Student"</h4>
            </div>
        </div>
    )
}