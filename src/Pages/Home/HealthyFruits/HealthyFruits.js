import React from 'react';
import waterlemon from '../../../images/Watermelon.png'
import orange from '../../../images/orng.png'
import amla from '../../../images/amla.png'




const HealthyFruits = () => {
    return (
        <div className='mt-5 container '>
            <marquee behavior="" direction=""> <h1 className='text-primary'> Best Fruits for Healthy Skin</h1></marquee>
            <div className='container   gy-5 row  '>
                <div className='  shadow shadow-lg col-lg-4 col-md-12  '>
                    <img className='img-fluid' src={waterlemon} />
                    <h3 className='ms-3 mb-0 text-primary'>Waterlemon</h3>
                    <p className='p-3'>Watermelon is loaded with vitamin C, which instantly adds radiance to your skin. The grainy particles present in the fruit helps gently exfoliate the skin, while hydrating it as well. You can apply a spoonful of mashed watermelon to your skin, to naturally scrub off any dead skin cells present.</p>
                </div>

                <div className=' shadow shadow-lg col-lg-4 col-md-12'>
                    <img className='img-fluid' src={orange} />
                    <h3 className='ms-3 mb-0 text-primary'>Orange</h3>
                    <p className='p-3'>Oranges are extremely rich in Vitamin C, which helps to even out your skin tone and texture by supporting the production of Collagen. By restoring the elasticity in your skin, your complexion becomes firmer, more taut and wrinkles are banished.
                    </p>
                </div>
                <div className=' shadow shadow-lg col-lg-4 col-md-12'>
                    <img className='img-fluid' src={amla} />
                    <h3 className='ms-3 mb-0 text-primary'>Gooseberry</h3>
                    <p className='p-3'> Amla is the most sought-after fruit for glowing skin! The fruit is loaded with antioxidants that protect your cells. Gooseberry is also full of Vitamin C and water, which means you are always hydrated and the toxins are being flushed out of your system! It also reduces acne outbreaks, leaving you with the perfect skin
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HealthyFruits;