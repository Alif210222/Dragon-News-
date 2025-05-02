import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import LeftASide from '../Pages/Home/LeftAside/LeftASide';
import RightASide from '../Pages/Home/RightAside/RightASide';
import Loading from '../Components/Loading/Loading';
import { Helmet } from 'react-helmet-async';

const Root = () => {
       const {state} = useNavigation()

    return (
        <div>
           <Helmet>
             <title>Home</title>
         </Helmet>

           <header><Header></Header> </header>
                  <Navbar></Navbar>



      <main className='w-11/12 mx-auto my-5 grid grid-cols-12 gap-6 mt-10'>  
            <aside className='col-span-2 sticky  h-fit top-0'>
                <LeftASide></LeftASide>
            </aside>  

             <section className='col-span-7 '>

                 {
                    state == "loading" ? <Loading></Loading> :  <Outlet></Outlet>
                 }

            </section>  

             <aside className='col-span-3 sticky h-fit  top-0'>
                <RightASide></RightASide>
            </aside>           
     </main>




        </div>
    );
};

export default Root;