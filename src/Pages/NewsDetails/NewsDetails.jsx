import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightASide from '../Home/RightAside/RightASide';
import NewsDeyailsCart from './NewsDeyailsCart';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const NewsDetails = () => {
    const [news , setNews ] = useState({})
      const data = useLoaderData()
    //   console.log(data)
      const {id} = useParams()
    //   console.log(id)

      useEffect(()=>{
          const findNews = data.find(news => news.id == id)
          setNews (findNews)

      },[data,id])


    return (
        <div>
          <header>
              <Header></Header> 
              <Navbar></Navbar>  
        </header>

        <main className='w-11/12 mx-auto grid grid-cols-12 mt-6'>
           <section className='col-span-9'>
              <h2 className='font-bold mb-5 text-2xl'>Dragon News</h2>
              <NewsDeyailsCart news={news}></NewsDeyailsCart>
           </section>
           <aside className='col-span-3 sticky h-fit top-0'>
               <RightASide></RightASide>
           </aside>
        </main>

        </div>
    );
};

export default NewsDetails;