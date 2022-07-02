import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fruit from '../../Home/Fruit/Fruit';
import './FruitsInfo.css'
const FruitsInfo = () => {
   const { fruitsId } = useParams();
   const [fruitsInfo, setFruitsInfo] = useState({});

   useEffect(() => {
      const url = `https://mighty-mountain-44501.herokuapp.com/fruitsinfo/${fruitsId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setFruitsInfo(data))
   });




   return (
      <div className='row '>

         <div className="col-lg-3">
         </div>
         <div className="col-lg-4">
            <img width="400px" height="300px" src={fruitsInfo.img} alt=""></img>
            <h4>{fruitsInfo.name}</h4>
            {fruitsId}
            <p>Price: {fruitsInfo.price}</p>
            <p>Quntity {fruitsInfo.quantity}</p>
            <button className='mb-1' onClick="delivery()">Delivered</button> <br />
            <input type="text" placeholder='Add Auntity' />
            <button>Add</button> <br />

         </div>

         <div className="col-lg-2 mt-5">


        
            <Link to='/c'>  <button className='btn-for-all-review' >All Fruits item </button></Link>

         </div>




      </div>
   );
};

export default FruitsInfo;