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
        <h1>About Carlo Restaurant</h1>
        <div className="aboutDetailsContainer">
            <ul>
                <li>
                    <h3>Address :</h3>
                    <p>{info.address}</p>
                </li>
                <li>
                    <h3>Average Delivery Time :</h3>
                    <p>{info['avg_delivery_time']}</p>
                </li>
                <li>
                    <h3>Total Menu Categories :</h3>
                    <p>{info['total-category']}</p>
                </li>
                <li>
                    <h3>Total Food Items :</h3>
                    <p>{info['total-food-items']}</p>
                </li>
                <li>
                    <h3>Contact Us</h3>
                    <p>+875481246</p>
                </li>
            </ul>
        </div>
        </div>
    )
}