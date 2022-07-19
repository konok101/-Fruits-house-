
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';


const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    

    /* console.log(user.email); */
    const onSubmit = data => {
        const info = {
            'email': user.email,
            'nameSup':data.nameSup,
            'name': data.name,
            'description': data.description,
            'img': data.img,
            'price': data.price,
            'quantity': data.quantity,
        }
        console.log(info);
        //const url = `https://mighty-mountain-44501.herokuapp.com/fruitsInfo`;
        const url = `https://mighty-mountain-44501.herokuapp.com/fruitsInfo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='bg-primary p-3 mt-5'>Add item!!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100' placeholder='Enter the item name' {...register("name")} />
                <input className='w-100' placeholder='Enter the suplier Name' {...register("nameSup")} />
                <input className='w-100' placeholder='Enter the description' {...register("description")} />
                <input className='w-100' placeholder='Enter the img url' {...register("img")} />
                <input className='w-100' placeholder='Enter the price' type="number" {...register("price")} />
                <input className='w-100' placeholder='Enter the quntity' type="number" {...register("quantity")} /> <br />
                <input className='w-100' type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddNewItem;