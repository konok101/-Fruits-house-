import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fruit from '../../Home/Fruit/Fruit';
import './FruitsInfo.css'
const FruitsInfo = () => {
   const { fruitsId } = useParams();
   const [fruitsInfo, setFruitsInfo] = useState({});

   const [add, setAdd] = useState(0);

   useEffect(() => {
      const url = `https://mighty-mountain-44501.herokuapp.com/fruitsinfo/${fruitsId}`;

      fetch(url)
         .then(res => res.json())
         .then(data => setFruitsInfo(data))
   }, []);

   console.log(fruitsInfo.quantity);
   const [quantity, setQuantity] = useState(5);
   console.log(quantity);
   const delivery = (event) => {
      setQuantity(() => quantity - 1);
   }



   const addQuntity = (event) => {
      setQuantity(parseInt(quantity) + parseInt(add));
   }




   return (
      <div className='row mt-5'>

         <div className="col-lg-3">
         </div>
         <div className="col-lg-5 shadow shadow-lg text-center p-3 ">
            <img width="400px" height="300px" className='p-3' src={fruitsInfo.img} alt=""></img>
            <h4>{fruitsInfo.name}</h4>
            <p> Suplier: {fruitsInfo.nameSup}</p>
            <p>Price: {fruitsInfo.price}</p>
            <p>Quntity{quantity} </p>
            <button className='mb-1 btn btn-primary ' onClick={() => delivery()}>Delivered</button> <br />
            <input onBlur={(event) => setAdd(event.target.value)} type="number" placeholder='Add Auntity' />
            <button className=' btn btn-primary' onClick={() => addQuntity()}>Add</button> <br />

         </div>

         <div className="col-lg-3 mt-5">



            <div className='w-75 mx-auto'>
               <Link to='/manage'>  <button className='btn-for-all-review btn btn-info' >  Manage Inventories</button></Link> <br /> <br />
               <Link to='/add'>  <button className='btn-for-all-review btn btn-info' > Add item </button></Link>

            </div>
         </div>




      </div>
   );
};

export default FruitsInfo;