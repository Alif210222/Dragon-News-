import React, { useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from './AuthContext';
 


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)

      
// console.log(user)

    const createUser = (email,password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password) 
        
      }

    const loginUser = (email,password) =>{
        setLoading(true)
         return signInWithEmailAndPassword (auth,email,password)
    }  

    const logoutUser = () =>{
        setLoading(true)
         return signOut(auth)
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData )
    }


    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,(currentUser) =>{
               setUser(currentUser)
               setLoading(false)
        } )
        return()=>{
            unSubscriber();
        }

       
    } , [])

    const userInfo = {
        user,
        loading,
        setUser ,
        createUser,
        loginUser,
        logoutUser,
        updateUser

    }
       

    return (
       <AuthContext value={userInfo}> 
           {children}
       </AuthContext>
    );
};

export default AuthProvider;