import React, { use } from 'react';
import { NavLink} from 'react-router';


const categoryPromise = fetch("/categories.json") 
                        .then(result=> result.json())
       
    

const Category = () => {

    

    const categories= use(categoryPromise)

    return (
        <div className='mt-4 grid grid-cols-1 space-y-2'>
            {
                categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='text-[18px]  font-medium text-[#676666] bg-[#f1f1f1] p-2 border-none rounded'>{category.name}</NavLink> )
            }
            
        </div>
    );
};

export default Category;