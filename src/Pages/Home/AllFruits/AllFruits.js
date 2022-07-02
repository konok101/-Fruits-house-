import React, { useEffect, useState } from 'react';
import Allfruit from '../Allfruit/Allfruit';
import Fruit from '../Fruit/Fruit';

const AllFruits = () => {

    const [ Details, setDetails] = useState([]);

    useEffect(() => {
        fetch(' https://mighty-mountain-44501.herokuapp.com/fruitsinfo')
            .then(res => res.json())
            .then(data => setDetails(data));

    }, []);
    return (
        <div>
            <h1>pppppppppp {Details.length}</h1>
            {
                Details.map(fruit => <Allfruit
                    key={fruit._id}
                    fruit={fruit}
                ></Allfruit>)
            }
        </div>
    );
};

export default AllFruits;