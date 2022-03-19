import React, { useEffect} from "react";
import '../css/mainBody.css';
import Menu from './foodMenuItems'
import { useDispatch } from "react-redux";
import handleInitialData from "../actions/handleInitialData";
import {Routes, Route} from 'react-router'
import About from './about'
import HomePage from "./home";
import TitlebarBelowImageList from './gallery'


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
                    <Route exact path = '/about' element={<About/>} />
                    <Route path = '/home' element = {<HomePage />} />
                    <Route path = '/gallery' element = {<TitlebarBelowImageList />} />
                    <Route path = '/' element = {<HomePage />} />
            </Routes>
        </div>
    )
}
