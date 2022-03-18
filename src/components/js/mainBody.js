import React, { useEffect, useState } from "react";
import '../css/mainBody.css';
import Menu from './foodMenuItems'
import { useDispatch } from "react-redux";
import handleInitialData from "../actions/handleInitialData";


export default function MainBody() {
   
    const dispatch = useDispatch()
    const loadData = ()=> {
       dispatch(handleInitialData()) 
    }

    useEffect(()=> {
        loadData();
    },[])
    
    return (
        <div className="bodyContainer">
            <Menu/>
        </div>
    )
}
