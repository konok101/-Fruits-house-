import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FruitsInfo.css'
const FruitsInfo = () => {
   const { fruitsId } = useParams();

   const [fruitsInfo, setFruitsInfo] = useState({});


   useEffect(() => {
      const url = `http://localhost:5000/fruitsInfo/${fruitsId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setFruitsInfo(data))
   }, [])


   return (
      <div className='fruit w-50 '>
         <img className='w-100' height="399px" src={fruitsInfo.img} alt=""></img>
         <h1>{fruitsInfo.name}</h1>
         <p>Price: {fruitsInfo.price}</p>
         <p>Quntity: <button>+</button>   {fruitsInfo.quantity}  <button>+</button>  </p>
         <p><small>{fruitsInfo.description}</small></p>
         <h4  >Quantinty  </h4>
      </div>
   );
};

export default FruitsInfo;