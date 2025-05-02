import React from 'react';
import logo from "../../assets/logo.png"
import {format} from "date-fns"
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div>
             <div className='flex flex-col items-center text-center mt-10 space-y-2'>
                <img className='w-[450px]' src={logo} alt="" />
                <p className='text-[18px] font-medium text-black'>Journalism Without Fear or Favour</p>
             
                  <p>{format(new Date(),"EEEE, MMMM MM , yyyy")}</p>

                  <div className='flex gap-3 p-3 bg-secondary items-center mt-4 w-11/12 mx-auto' >
                   <button className='bg-base-200 p-2'>Latest </button>
                   <Marquee pauseOnHover={true}>
                   <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                   </Marquee>
               </div>
             </div>
        </div>
    );
};

export default Header;