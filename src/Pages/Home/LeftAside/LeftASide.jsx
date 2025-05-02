import React from 'react';
import Category from '../../../Components/Category/Category';

const LeftASide = () => {
    return (
        <div>
           <h2 className='text-2xl font-bold ml-4 mb-2'>All Category</h2>
           <hr></hr>
           <Category></Category>

        </div>
    );
};

export default LeftASide;