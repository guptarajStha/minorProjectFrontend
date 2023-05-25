import React from 'react';
import {Route,Routes,useLocation} from 'react-router-dom'
import Home from './Home';
import Test from './Test';
const Pages = () => {
    const location = useLocation()
  return (
    <div>
      <Routes Location={location.pathname} key ={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/test/' element={<Test />}/>

      </Routes>
    </div>
  );
}

export default Pages;
