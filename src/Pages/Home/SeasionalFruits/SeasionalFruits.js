 import React from 'react';
 import jf from '../../../images/jf.png'
 import  mango from '../../../images/mango.png'
 import water from '../../../images/melon.png'
 import pepaya from '../../../images/papaya.png'
 
 const SeasionalFruits = () => {
 
    return (
        <div>
              <h1>Summer season  Fruits In Bangladesh</h1>
              <div className='seasional row'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={jf} />
                    <h4>Jackfruit</h4>

                </div>
                <div  className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={mango} />
                    <h4>Mango</h4>
                </div>
                <div  className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={water} />
                    <h4>Watermelon</h4>
                </div>
                <div  className='col-lg-3 col-md-6 col-12'>
                    <img className='img-fluid' src={pepaya} />
                    <h4>Papaya</h4>
                </div>
              </div>
        </div>
    );
 };
 
 export default SeasionalFruits;