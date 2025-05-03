import React, { use } from 'react';
import userimg from "../../assets/user.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';

const Navbar = () => {

  const {user,logoutUser} = use(AuthContext)

  const navigate = useNavigate()
  const handleLogout= () =>{
        // console.log("user log out")

        logoutUser()
        .then(result => {
          // console.log(result)
          navigate("/auth/login")
        })
        .catch(error=>[
          // console.log(error)
        ])
  }


    return (
        <div className='mt-6'>
            <div className="navbar bg-base-100   w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1 space-x-4">
      <li><NavLink to="/" className="border p-2 border-amber-400 rounded-xl">Home</NavLink></li>
     
      <li><NavLink to="/about" className="border p-2 border-amber-400 rounded-xl" >About</NavLink></li>
      <li><NavLink to="/career"  className="border p-2 border-amber-400 rounded-xl">Career</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-4"> 
   <p className='border p-2 border-amber-400 rounded-2xl'  >{user &&  user.email}</p>
    <img className='w-10 h-10 rounded-full border-2 p-1' src={user? user.photoURL : userimg } alt="" />

    {
      user ? (<button onClick={handleLogout} className='px-6 py-2 border rounded bg-primary text-white cursor-pointer hover:bg-gray-400 duration-700 '>Logout </button> ) 
       : (<Link to='/auth/login' className="px-6 py-2 border rounded bg-primary text-white">Login</Link>)
    }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;