import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            console.log(email);
            const url = `http://localhost:5000/fruitsInfo?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])


    return (
        <div>
            <h1>This is my items{orders.length}</h1>
        </div>
    );
};

export default Myitems;