import React from 'react';  
import {Routes,Route,Navigate} from 'react-router-dom'
import Tours from '../Pages/Tours';   
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';  
import Home from '../Pages/Home';
import ThankYou from '../Pages/ThankYou';


const Routers = () => {
  return (
    <Routes>
        <Route path="/"  element={<Navigate to='/home'/>}/>  
        {/* <Route path="/home" element={<Home/>}/>   */}
        <Route  path="/home" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>     
        <Route path="/thank-you" element={<ThankYou/>}/>   
        <Route path="/tours/search" element={<SearchResultList/>}/>
    </Routes>
  );
}

export default Routers;
