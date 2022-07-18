import React from 'react';
import FruitsApi from '../../Details/FruitsApi/FruitsApi';
import './Allfruits.css'
const AllFruits = () => {
    const [services, setServices] = FruitsApi();
    const handleDelete = (id) => {
        const  proced = window.confirm('Are you sure delete?');
        if (proced) {
            const url = `http://localhost:5000/fruitsInfo/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainig = services.filter(fruit => fruit._id !== id);
                    setServices(remainig)

                })

        }

    }
    return (
        <div className='w-50 mx-auto'>
            <table >


                {

                    services.map(fruit => <div key={fruit._id}>
                        <div className='d-flex justify-content-between  '>
                            <div>
                                <tr>
                                    <td className='p-1'>{fruit.name}</td>
                                    <td className='p-2'>{<img width="50px" src={fruit.img} />}</td>
                                    <td className='p-4'>{fruit.quantity}</td>
                                    <td className='p-3'>{fruit.price}</td>
                                </tr>


                            </div>
                            <div className='bg-danger m-1'>
                                <button onClick={() => handleDelete(fruit._id)}>  <h1>Delete item</h1></button>
                            </div>
                        </div>

                    </div>)

                }
            </table>
        </div>
    );

};

export default AllFruits;