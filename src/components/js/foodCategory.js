import React from 'react';
import { useSelector } from 'react-redux';
import '../css/foodCategory.css'
import { connect } from 'react-redux';

export default function FoodCategory () {
    return (
        <div className='categories'>
            <ul className='categoryList'>
                <li onClick={()=> console.log(categories)}>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
            </ul>
        </div>
    )
}
