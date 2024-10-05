
import './App.scss';

import React from 'react'
import { routes } from './routes/routes.js';
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  return <div>

    
          

          <Routes>
          
            {routes?.map(route => { return <Route key={route.path} path={route.path} element={route.element} /> })}
          </Routes>
       
  </div>

}




