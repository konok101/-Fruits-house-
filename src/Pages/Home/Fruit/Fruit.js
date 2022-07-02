import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css'

const Fruit = ({ fruit }) => {
    const { _id, name, img, price,quantity, description } = fruit;
    const navigate = useNavigate();

    const navigateToInfo = _id => {
        navigate(`/fruitsInfo/${_id}`)


    }
    console.log(quantity);
    return (
        <div className='fruits'>
            <img className='w-100' src={img} alt=""></img>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInfo(_id)}>Buy Now: {name}</button>
        </div>
    );
};

export default Fruit;