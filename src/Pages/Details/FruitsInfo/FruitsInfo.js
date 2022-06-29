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
      <div className='row'>

         <div className="col-lg-3">
         </div>
         <div className="col-lg-4">
            <img width="400px" height="300px" src={fruitsInfo.img} alt=""></img>
            <h4>{fruitsInfo.name}</h4>
            {fruitsId}
            <p>Price: {fruitsInfo.price}</p>
            <p>Quntity {fruitsInfo.quantity}</p>
            <button onClick="delivery()">Delivered</button>
         </div>

         <div className="col-lg-2">
            <input type="text" name="add" id="" /> <br />
             <button>Adds</button>
         </div>




      </div>
   );
};

export default FruitsInfo;