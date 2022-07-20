import React from 'react';
import jf from '../../../images/jf.png'
import mango from '../../../images/mango.png'
import water from '../../../images/melon.png'
import pepaya from '../../../images/papaya.png'

import orange from '../../../images/orangsss.png'
import  guava from '../../../images/guava.png'
import Grapes from '../../../images/Grapes.png'
import Strawberries  from '../../../images/Strawberries.png'

import './Seasional.css'

const SeasionalFruits = () => {

    return (
        <div className='container'>
            <h1 className='text-primary mt-4 mb-2 text-center'> Seasonal  Fruits In Bangladesh</h1> 
 
            <div className=' row shadow shadow-lg '>
                <h3  className='text-info  mb-2'>Summer Fruits</h3>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={jf} />
                    <h4>Jackfruit</h4>

                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={mango} />
                    <h4>Mango</h4>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={water} />
                    <h4>Watermelon</h4>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={pepaya} />
                    <h4>Papaya</h4>
                </div>
            </div>

            <div className=' seasional row shadow shadow-lg '>
                <h3 className='text-info mt-5 mb-2'>Winter Fruits</h3>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid'   src={guava} />
                    <h4> Guava</h4>

                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={orange} />
                    <h4>Orange</h4>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={Strawberries} />
                    <h4>Strawberries</h4>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid'  src={Grapes} />
                    <h4>Grapes</h4>
                </div>
            </div>
        </div>
    );
};

export default SeasionalFruits;