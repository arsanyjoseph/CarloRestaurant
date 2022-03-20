import React, { useState } from 'react';
import RecipeReviewCard from './cardMenu'
import '../css/foodMenuItems.css'
import NavTabs from './categories'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';


export default function Menu (props) {
    const stateImport = useSelector((state)=> state);
    const {categories} = stateImport;

    const [index , setIndex] = useState(0)
    //get names of categories in Array
    const getCategoriesNames = ()=> {
        let namesArray= []
        categories.map((i)=> {
            let modifyName = i.name.split(' ').join('-').toLowerCase()
            namesArray.push(modifyName)
            return namesArray
        })
        return namesArray
    }
    //Storing names of categories in Array
    const namesCatArray = getCategoriesNames()
    //usig URL params to get category name
    const params = useParams()
    
    useEffect(()=> {
        let n = namesCatArray.indexOf(params.category)
        if(!n || n === -1) {
            setIndex(0)
        } else {
            setIndex(n)
        }
 },[namesCatArray, params.category])

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
                {
                    categories[index]['items'].map((item)=> <RecipeReviewCard key={item.id} plateName={item.name} description={item.description} imageSource={item.images} category={`${categories[index].name}`} detailsArray={item['sub-items']} />)
                }  
                </div>
            </div>
        )
    }
    
