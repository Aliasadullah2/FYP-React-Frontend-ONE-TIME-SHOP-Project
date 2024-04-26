import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom';
import { isLoggedIn } from '../Auth/AuthIndex';

const Mentor = () => {
    if(isLoggedIn() ){
        return <Outlet/>;
      }else{
        return <Navigate to={"/Sigin"}/>;
      }
}

export default Mentor