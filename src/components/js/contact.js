import React, { useState } from "react";
import '../css/contact.css'

export default function Contact () {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = (event)=> {
        event.preventDefault();
        const nameValue = document.getElementById('name').value
        const messageValue = document.getElementById('details').value

        setName(nameValue)
        setMessage(messageValue)
        
        document.getElementById('details').value= '';
        document.getElementById('name').value= '';

        window.alert('Thank You')
    }
    return (
        <div>
            <form className="formHandle">
                <label htmlFor="name">Full Name</label>
                <input type='text' name="name" id="name"></input>
                <label htmlFor="details">Details</label>
                <textarea type='text' name="details" id="details" ></textarea>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}