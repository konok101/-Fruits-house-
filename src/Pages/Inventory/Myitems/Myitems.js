import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import FruitsApi from '../../Details/FruitsApi/FruitsApi';
import deletbtn from '../../../images/delete.png'
 
const Myitems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [services, setServices] = FruitsApi();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            console.log(email);
            const url = `http://localhost:5000/myFruitsInfo?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])

    const handleDelete = (id) => {
        const proced = window.confirm('Are you sure delete this item?');
        if (proced) {
            
            const url = `http://localhost:5000/fruitsInfo/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.location.reload();
                    const remainig = services.filter(fruit => fruit._id !== id);
                     setOrders(remainig);
                    

                })

        }

    }





    return (
        <div>
             
            {

                orders.map(fruit => <div key={fruit._id}>
                    <div className='d-flex justify-content-center '>
                        <div>
                            <tr>
                                <td className='p-1'>{fruit.name}</td>
                                <td className='p-2'>{<img width="50px" src={fruit.img} />}</td>
                                <td className='p-4'>{fruit.quantity}</td>
                                <td className='p-3'>{fruit.price}</td>
 
                            </tr>


                        </div>
                        <div className='bg-danger m-1'>
                            <button onClick={() => handleDelete(fruit._id)}>  <img width="50px" src={deletbtn} /></button>
                        </div>

                    </div>

                </div>)

            }
        </div>
    );
};

export default Myitems;