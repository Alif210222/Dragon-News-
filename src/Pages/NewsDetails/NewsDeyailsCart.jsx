import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const NewsDeyailsCart = ({news}) => {
         
    const {
        id,
        category_id,
        title,   
        thumbnail_url,
        details,
        
      } = news;

    return (
        <div className='border rounded-2xl m-8 ' >

            <Helmet>
                <title>News Details</title>
            </Helmet>
            <div className='m-10'>

            
            <img src={ thumbnail_url} alt="" />
            <h1 className='text-3xl font-bold my-6'>{title}</h1>
            <p>{details}</p>

            <button className='btn text-white  mt-6'><Link to={`/category/${category_id}`}>  Back to  news category </Link></button>
            </div>
        </div>
    );
};

export default NewsDeyailsCart;