import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';



const Register = () => {
       const {createUser,setUser,updateUser} = use(AuthContext)
       const [nameError,setNameError] = useState('')
       const navigate = useNavigate()

      const handleRegister = (e) =>{
          e.preventDefault()
          const name = e.target.name.value
          if(name.length <4){
             setNameError("Name 6 carecterneeded")
             return ;
          }
          else {
            setNameError("")
          }
          const photo = e.target.photo.value
          const email = e.target.email.value
          const password = e.target.password.value

          // console.log(name,email,password)

          
      

          createUser(email,password)
          .then(result =>{        
            const  user = result.user 
               console.log(user)
                // email verify   success full code ...yeahhh!!
                    sendEmailVerification(user)
                    .then(()=>{
                    console.log("we send a verification email.")
                        alert("we send you a email,please verify your email .")
                        
                    })

              // data update
             
                updateUser({displayName : name , photoURL : photo }) 
                .then (()=>{
                  setUser({...user , displayName : name , photoURL : photo})
                     
                  navigate("/")
                })
                .catch(error =>{
                  // console.log(error)
                  setUser(user) // jdi update datay kno error ase tahole ager user ke abr set kore dibo
                })        
               
           
          })
          .catch(error=>{
            // console.log(error)
          })

        }


    return (
        <div>
            <div className="hero bg-[#f0eeee] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-[#cdcbcb] w-full max-w-sm  shrink-0 shadow-2xl border p-14 ">
    <h1 className="text-4xl font-bold">Register now!</h1>
      <div className="card-body ">
        <form onSubmit={handleRegister} className="fieldset">

          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Type your name"  required/>
          <p className='text-md text-red-600 '>{nameError}</p>

          <label className="label">Photo Url</label>
          <input type="text" className="input" name="photo" placeholder="Photo Url" required/>

          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" required/>


          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" required />
          
          <button type='submit' className="btn btn-neutral mt-4 hover:bg-gray-600">Register</button>
        </form>
        <p className='text-md font-bold mt-4'>If,you have no account , <Link to="/auth/login" className='text-pink-600 text-md font-bold underline'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;