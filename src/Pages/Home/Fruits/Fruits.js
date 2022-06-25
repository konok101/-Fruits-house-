import React, { useEffect, useState } from 'react';
 
import FruitsInfo from '../../Details/FruitsInfo/FruitsInfo';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruitsDetails, setFruitsDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruitsInfo')
            .then(res => res.json())
            .then(data => setFruitsDetails(data));

    }, []);
    return (
        <div className='container '>
            <h1 className='fruit-title mt-5'>Our Total Services: {fruitsDetails.length}</h1>
            <div className='fruit-container'>
                {
                    fruitsDetails.map(fruit => <Fruit
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
         

        </div>
    );
};

export default Fruits;