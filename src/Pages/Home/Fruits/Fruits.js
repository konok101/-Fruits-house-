import React, { useEffect, useState } from 'react';

import FruitsInfo from '../../Details/FruitsInfo/FruitsInfo';
import Fruit from '../Fruit/Fruit';
import HealthyFruits from '../HealthyFruits/HealthyFruits';
import SesionalFruits from '../SeasionalFruits/SeasionalFruits';
import './Fruits.css'

const Fruits = () => {
    const [fruitsDetails, setFruitsDetails] = useState([]);

    useEffect(() => {
        fetch(' https://mighty-mountain-44501.herokuapp.com/fruitsinfo')
            .then(res => res.json())
            .then(data => setFruitsDetails(data));

    }, []);
    return (
        <div className='container '>
            <h1 className='fruit-title mt-5'>Our Fruits Item </h1>
            <div className='fruit-container'>
                {
                    fruitsDetails.slice(0, 6).map(fruit => <Fruit
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>

            <HealthyFruits></HealthyFruits>
            <SesionalFruits></SesionalFruits>
        </div>
    );
};

export default Fruits;