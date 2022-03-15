import React from 'react';
import ImgMediaCard from './cardMenu'
import '../css/foodMenuItems.css'
import LinkTab from './categories'

export default function Menu () {
    return (
        <div className='menuContainer'>
            <LinkTab/>
            <div className='cardsContainer'>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
            </div>
            
        </div>
    )
}