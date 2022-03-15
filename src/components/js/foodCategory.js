import React from 'react';
import '../css/foodCategory.css'

export default function FoodCategory () {
    return (
        <div className='categories'>
            <ul className='categoryList'>
                <li onClick={()=> console.log('hi')}>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
                <li>cat1</li>
            </ul>
        </div>
    )
}
