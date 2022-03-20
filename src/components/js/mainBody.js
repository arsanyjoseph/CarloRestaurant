import React, { useEffect} from "react";
import '../css/mainBody.css';
import Menu from './foodMenuItems'
import { useDispatch } from "react-redux";
import handleInitialData from "../actions/handleInitialData";
import {Routes, Route} from 'react-router'
import About from './about'
import HomePage from "./home";
import TitlebarBelowImageList from './gallery'
import HelperTextMisaligned from './contact'


export default function MainBody() {
   
    const dispatch = useDispatch()
    const loadData = ()=> {
       dispatch(handleInitialData()) 
    }

    useEffect(()=> {
        loadData();
    })
    return (
        <div className="bodyContainer">
            <Routes>
                    <Route  exact path="/menu" element={<Menu/>}/ >
                    <Route  path = '/menu/:category' element = {<Menu/>}/>
                    <Route exact path = '/about' element={<About/>} />
                    <Route exact path = '/home' element = {<HomePage />} />
                    <Route exact path = '/contact' element = {<HelperTextMisaligned />} />
                    <Route rxact path = '/gallery' element = {<TitlebarBelowImageList />} />
                    <Route path = '/' element = {<HomePage />} />
            </Routes>
        </div>
    )
}
