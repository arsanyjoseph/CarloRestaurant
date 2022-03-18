import React, { useEffect, useState } from 'react';
import RecipeReviewCard from './cardMenu'
import '../css/foodMenuItems.css'
import NavTabs from './categories'
import { useSelector } from 'react-redux';

export default function Menu () {
    const stateImport = useSelector((state)=> state);
    const {categories} = stateImport;
    const extractNames = (i = []) => {
        let namesArray = [];
        i.map((item)=> {
            namesArray.push(item.name)
        })
        return namesArray
    }
    const extractItems = (i = []) => {
        const {items} = i;
        return items
    }

    const itemsCat1 = extractItems(categories[0])


    return (
        <div className='menuContainer'>
            {categories.length > 0 && 
                <NavTabs categoriesArray = {categories} />
            }
            <div className='cardsContainer'>
                { typeof(itemsCat1) === 'object' &&
                itemsCat1.map((text, index)=> <RecipeReviewCard key = {index} plateName = {text.name} category='bruger' />)}
               
            </div>
        </div>
    )
}