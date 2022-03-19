import React, { useEffect, useState } from "react";
import '../css/mainBody.css';
import Menu from './foodMenuItems'
import { useDispatch } from "react-redux";
import handleInitialData from "../actions/handleInitialData";
import {Routes, Route} from 'react-router'
import RecipeReviewCard from './cardMenu'


export default function MainBody() {
   
    const dispatch = useDispatch()
    const loadData = ()=> {
       dispatch(handleInitialData()) 
    }

    useEffect(()=> {
        loadData();
    },[])
    const arr2 = ['1', '2']
    return (
        <div className="bodyContainer">
            <Routes>
                    <Route  exact path="/menu" element={<Menu/>}/ >
                    <Route  path = '/menu/:category' element = {<Menu/>}/>
            </Routes>
        </div>
    )
}
