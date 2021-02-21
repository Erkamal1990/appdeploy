import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink,Redirect } from 'react-router-dom';
import axios from 'axios';
function Comman (){
if (!sessionStorage.getItem('isLogin')) {
    return <Redirect to={'/Login'} />;
} 
  return(
        <div></div>
    );
}
export default Comman;