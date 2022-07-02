import React from 'react';
import './Allfruit.css'

const Allfruit = ({ fruit }) => {
    const { _id, name, img, price, quantity, description } = fruit;



    return (
        <div className='fruit w-50 mx-auto justify-content-between'>
    

                <div>
                    <img width="60px" className='rounded' src={img} alt=""></img>
                    <h5>bb{name.slice(0, 7)}</h5>
                </div>
                <button>delete</button>
           

        </div>
    );
};

export default Allfruit;