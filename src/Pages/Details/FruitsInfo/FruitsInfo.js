import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      <div className='fruit w-100 d-flex justify-content-between '>
         <dir>
            <img width="400px" height="300px" src={fruitsInfo.img} alt=""></img>
            <h4>{fruitsInfo.name}</h4>
            {fruitsId}
            <p>Price: {fruitsInfo.price}</p>
            <p>Quntity {fruitsInfo.quantity}</p>
            <button onClick="delivery()">Delivered</button>
         </dir>

         <div className='w-25 '>
            <form>
               <input type="number" placeholder='Add Quntity' name="quantity" id="" />
               <input  type="submit" value="Add" />
            </form>
         </div>

      </div>
   );
};

export default FruitsInfo;