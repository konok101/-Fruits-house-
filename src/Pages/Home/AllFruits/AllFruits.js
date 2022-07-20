import React from 'react';
import FruitsApi from '../../Details/FruitsApi/FruitsApi';
import './Allfruits.css'
import deleteicon from '../../../images/delete.png'

const AllFruits = () => {
    const [services, setServices] = FruitsApi();

    const handleDelete = (id) => {
        const proced = window.confirm('Are you sure delete this fruit?');
        if (proced) {
            const url = `https://mighty-mountain-44501.herokuapp.com/fruitsInfo/${id}`
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
        <div className='  row'>
            <div className="col lg-3">


            </div>
            <div className="col-lg-6">
                <h1 className='shadow shadow-lg text-center p-2'>All Fruits</h1>
                <table className='w-50 mx-auto'>
 

                    {

                        services.map(fruit => <div key={fruit._id}>
                            <div className='d-flex justify-content-center shadow shadow-lg  '>
                                <div>
                                    <tr>

                                        <td className='p-1'>{fruit.name.slice(0,7)}</td>
                                        <td className='p-2'>{<img width="50px" src={fruit.img} />}</td>
                                        <td className='p-4'>{fruit.quantity}</td>
                                        <td className='p-3'>{fruit.price}</td>


                                    </tr>


                                </div>

                                <div className='  m-1'>
                                    <button onClick={() => handleDelete(fruit._id)}> <img width="50px" src={deleteicon} /> </button>
                                </div>

                            </div>

                        </div>)

                    }
                </table>

            </div>

            <div className="col-lg-3">

            </div>

        </div>
    );

};

export default AllFruits;