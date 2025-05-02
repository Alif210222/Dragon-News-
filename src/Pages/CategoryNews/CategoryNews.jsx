import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../../Components/NewsCart/NewsCart';

const CategoryNews = () => {
      const [filteredNews , setFilteredNews] = useState([])

      const {id} = useParams()

    //   console.log(typeof parseInt(id))
      const data = useLoaderData()

   useEffect(()=>{
      if(id == "0"){
        setFilteredNews(data)
      }
      else if(id == "1"){
         const todayNews = data.filter(news => news.others.is_today_pick == true)
          setFilteredNews(todayNews)
     
      }
      else{
        const filteredData = data.filter( news => news.category_id == id)
        //   console.log(filteredDta)
          setFilteredNews(filteredData)
      }
     
   },[data,id])



    return (
        <div> 
              

              <div className='grid grid-cols-1 gap-6'>
              {
                   filteredNews.map(news=> <NewsCart key={news.id} news={news}></NewsCart>) 
                }
              </div>
        </div>
    );
};

export default CategoryNews;