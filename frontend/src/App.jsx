import React from 'react';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Send from './pages/Send' ;
import LandingPage from './pages/LandingPage';
import AddMoney from './pages/AddMoney';
import TransHistory from './pages/TransHistory';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<Send />} />
          <Route path="/addmoney" element={<AddMoney />} />
          <Route path="/transhistory" element={<TransHistory />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
