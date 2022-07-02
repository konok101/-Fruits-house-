
import React from 'react';
import { useForm } from "react-hook-form";


const AddNewItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);
        const url=`http://localhost:5000/fruitsInfo`;
        fetch(url,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })
    }
       
    return (
        <div className='w-50 mx-auto'>
            <h3 className='bg-primary p-3 mt-5'>Add item!!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100' placeholder='Enter the name' {...register("name")} />
                <input className='w-100' placeholder='Enter the description' {...register("description")} />
                <input className='w-100' placeholder='Enter the img url' {...register("img")} />
                <input className='w-100' placeholder='Enter the price' type="number" {...register("price")} />
                <input className='w-100' placeholder='Enter the quntity' type="number" {...register("quntity")} /> <br />
                <input className='w-100' type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddNewItem;