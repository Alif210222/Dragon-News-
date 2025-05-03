import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';

const PrivetRoute = ({children}) => {
      const {user,loading} = use(AuthContext)
       const location = useLocation()
      //  console.log(location)

      if(loading) {
        return <Loading></Loading>
      }

      if(user && user?.email) {      // if(!user || !user.email){ return (<Navigate to="/auth/login"></Navigate>)}
            return children;              //** component er body r modde  kno funcion call kora jabe na    like : navigate  tai Navigate component use korte hobe */
      }

    return (
      <Navigate state={location.pathname}  to="/auth/login"></Navigate>   
    );
};

export default PrivetRoute;