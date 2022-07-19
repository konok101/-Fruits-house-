import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fruit from '../../Home/Fruit/Fruit';
import './FruitsInfo.css'
const FruitsInfo = () => {
   const { fruitsId } = useParams();
   const [fruitsInfo, setFruitsInfo] = useState({});
   const [quentity, setQuentity] = useState(0);
   const [add, setAdd]= useState(0);

   useEffect(() => {
      const url = `https://mighty-mountain-44501.herokuapp.com/fruitsinfo/${fruitsId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setFruitsInfo(data))
   });

   const delivery = (event) => {
      
    const quentityofApi = fruitsInfo.quantity;
    setQuentity(()=>quentityofApi-1);

     // setQuentity(()=>quentity-1);
   }

   const addQuntity =(event )=>{
      
      setQuentity(()=> parseFloat(quentity) + parseFloat(add));
    

   }


   return (
      <div className='row '>

         <div className="col-lg-3">
         </div>
         <div className="col-lg-4 shadow shadow-lg">
            <img width="400px" height="300px" src={fruitsInfo.img} alt=""></img>
            <h4>{fruitsInfo.name}</h4>
            {fruitsId}
            <p>Price: {fruitsInfo.price}</p>
            <p> Suplier: {fruitsInfo.nameSup}</p>
            <p>Quntity {quentity}</p>
            <button className='mb-1' onClick={() => delivery()}>Delivered</button> <br />
            <input onBlur={(event)=>setAdd(event.target.value)} type="number"  placeholder='Add Auntity' />
            <button onClick={()=>addQuntity()}>Add</button> <br />

         </div>

         <div className="col-lg-2 mt-5">



{/*             <Link to='/manage'>  <button className='btn-for-all-review' >All Fruits item </button></Link>
            <Link to='/add'>  <button className='btn-for-all-review' > Add item </button></Link> */}

         </div>




      </div>
   );
};

export default FruitsInfo;