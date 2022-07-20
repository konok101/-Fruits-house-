import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css'

const Fruit = ({ fruit }) => {
    const { _id, nameSup, name, img, price, quantity, description } = fruit;
    const navigate = useNavigate();

    const navigateToInfo = _id => {
        navigate(`/fruitsInfo/${_id}`)


    }
    console.log(quantity);
    return (
        <div className='fruits shadow shadow-lg'>
            <img className='w-100' width="400px" height="250px" src={img} alt=""></img>
                   <h1>{name}</h1>
                <p>Price: {price}</p>
                <p>Suplier: {nameSup}</p>
                <p>Quantity: {quantity}</p>
                <p><small>{description}</small></p>
                <button className='btn btn-primary ' onClick={() => navigateToInfo(_id)}>Buy Now: {name}</button>
            </div>
       
    );
};

export default Fruit;