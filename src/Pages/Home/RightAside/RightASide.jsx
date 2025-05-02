
import React from 'react';
import swimming from '../../../assets/swimming.png'
import classes from '../../../assets/class.png'
import playground from "../../../assets/playground.png"
import SocialLogin from '../../../Components/SoialLogin/SocialLogin';
import FindUs from '../../../Components/FindUs/FindUs';

const RightASide = () => {
    return (
        <div>
            
            <SocialLogin></SocialLogin>


           {/* Find section  */}
     
                  <FindUs></FindUs>
              
           {/* Q zONE */}
            
            <div className='p-2 bg-gray-200 mt-20 rounded-2xl pb-4 '>
                <p className='text-xl text-center font-bold mt-6 mb-6'>Q-Zone</p>
                <hr></hr>
                <div className='flex flex-col  items-center space-y-16 mt-6'>
                     <img className=' ' src={swimming} alt="" />
                     <img src={classes} alt="" />
                     <img src={playground} alt="" />
                </div>
            </div>


        </div>
    );
};

export default RightASide;