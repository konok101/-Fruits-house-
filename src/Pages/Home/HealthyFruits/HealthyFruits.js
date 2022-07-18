import React from 'react';
import waterlemon from '../../../images/Watermelon.png'
import orange from '../../../images/orng.png'

 

const HealthyFruits = () => {
    return (
        <div className='mt-5 '>
            <marquee behavior="" direction=""> <h1 className='text-primary'> Best Fruits for Healthy Skin</h1></marquee>
            <div className='container   gy-5 row'>
                <div className='  shadow shadow-lg col-lg-6 col-md-12'>
                    <img width="450px" height="400px" src={waterlemon} />
                    <h3 className='ms-3 mb-0 text-primary'>Waterlemon</h3>
                    <p className='p-3'>Watermelon is loaded with vitamin C, which instantly adds radiance to your skin. The grainy particles present in the fruit helps gently exfoliate the skin, while hydrating it as well. You can apply a spoonful of mashed watermelon to your skin, to naturally scrub off any dead skin cells present.</p>
                </div>

                <div className=' shadow shadow-lg col-lg-6 col-md-12'>
                    <img width="450px" height="400px" src={orange} />
                    <h3 className='ms-3 mb-0 text-primary'>Orange</h3>
                    <p className='p-3'>Oranges are extremely rich in Vitamin C, which helps to even out your skin tone and texture by supporting the production of Collagen. By restoring the elasticity in your skin, your complexion becomes firmer, more taut and wrinkles are banished.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HealthyFruits;