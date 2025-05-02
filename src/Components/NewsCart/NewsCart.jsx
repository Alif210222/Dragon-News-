import { FaStar, FaEye } from 'react-icons/fa';
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router';

const NewsCart = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="card max-w-2xl mx-auto bg-base-100 shadow-xl">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-bold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-400">
          <button className=" cursor-pointer btn-sm"><FaBookmark size={24} /></button>
          <button className=" cursor-pointer btn-sm"><FaShareAlt size={24}/></button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <img src={thumbnail_url} alt="News" className="w-full rounded-lg" />
        <p className="text-sm text-gray-700">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`}  className="text-blue-600 ml-1 cursor-pointer">Read More</Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t flex justify-between items-center">
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${i < rating.number ? 'text-orange-500' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-700 font-semibold">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;