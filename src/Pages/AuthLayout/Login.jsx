import React, { use, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {loginUser,setUser} = use(AuthContext)
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email,password)
        .then(result =>{
          const  user = result.user
          // console.log(result)
          setUser(user)
          navigate(location?.state || "/")
          
        })
        .catch(error =>{
          // console.log(error)
          setError(error.code)
        })

    }

    return (
        <div>
            <Helmet>
               <title>Login</title>
              </Helmet>


             <div className="hero bg-[#f0eeee] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-[#cdcbcb]  shrink-0 shadow-2xl border p-10">
    <h1 className="text-4xl font-bold">Login now!</h1>
      <div className="card-body ">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required/>
          <p className='text-md text-red-600 '>{error} </p>
          <div><a className="link link-hover">Forgot password?</a></div>

          <button type='submit' className="btn btn-neutral mt-4 hover:bg-gray-700">Login</button>
        </form>
        <p className='text-md font-bold'>If,you have no account , <Link to="/auth/register" className='text-pink-600 text-md font-bold underline'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;