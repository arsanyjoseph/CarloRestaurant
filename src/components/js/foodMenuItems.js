import React, { useState } from 'react';
import RecipeReviewCard from './cardMenu'
import '../css/foodMenuItems.css'
import NavTabs from './categories'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router'
import { useParams } from 'react-router';


export default function Menu (props) {
    const stateImport = useSelector((state)=> state);
    const {categories} = stateImport;
    const [category, setCategory] = useState([])
    const matchURL = ()=> {
        categories.filter((i)=> {
            let n = i.name.toLowerCase();
            let m = n.slice(' ')
            console.log(m)
    })}
    const params = useParams()
    const arr2 = [1,2]

    useEffect(()=> {
        console.log(categories)
        matchURL();
    },[])
    
    if (!params.category) {
        return (
        <div className='menuContainer'>
            {categories.length > 0 && 
                <NavTabs categoriesArray = {categories} />
            }
        </div>) 
            } 
        return (
        
            <div className='menuContainer'>
                {categories.length > 0 && 
                    <NavTabs categoriesArray = {categories} />
                }
                <div className='cardsContainer'>
                    {arr2.map((i)=> <RecipeReviewCard/> )}
                </div>
            </div>
        )
    }
    
