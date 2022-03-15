import React, { useEffect, useState } from "react";
import '../css/mainBody.css';
import Menu from './foodMenuItems'

export default function MainBody() {
    const [data, setData] = useState({})

    const getData = async ()=> {
        await fetch('data.json', { headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }})
        .then((res)=> res.json())
        .then ((res)=> {
            setData(res);
            console.log(res)
        })
    }

    useEffect( ()=> {
        getData()
        .then(()=> console.log(data))
    }, []
    );
    return (
        <div className="bodyContainer">
            <Menu/>
        </div>
    )
}