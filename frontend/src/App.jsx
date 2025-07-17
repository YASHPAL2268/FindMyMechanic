import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/Captainsignup";
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import VehiclePanel from './components/VehiclePanel';
import MechanicDetails from './pages/MechanicDetails';
import PetrolPartnerDetails from './pages/PetrolPartnerDetails';
import TowPartnerDetails from './pages/TowPartnerDetails';


const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
         <Route path='/login' element={<UserLogin />} />
         <Route path='/riding' element={<Riding />} />
         {/* <Route path='/captain-riding' element={<CaptainRiding />} /> */}
         <Route path='/signup' element={<UserSignup />} /> 
         <Route path='/captain-login' element={<Captainlogin />} /> 
         <Route path='/captain-signup' element={<CaptainSignup />} /> 
         <Route path='/home'element={
           <UserProtectWrapper>
            <Home/>
           </UserProtectWrapper>
         } />
          <Route path='/user/logout' element={
            <UserProtectWrapper> 
             <UserLogout />
          </UserProtectWrapper> 
         } />
         <Route path='/captain-home' element={  
           <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
          } /> 
          <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
             <CaptainLogout />
           </CaptainProtectWrapper> 
         } /> 

<Route path="/" element={<VehiclePanel />} />  
        <Route path="/mechanic" element={<MechanicDetails />} /> 
        <Route path="/petrol" element={<PetrolPartnerDetails />} /> 
        <Route path="/tow" element={<TowPartnerDetails />} />   
        </Routes>
    </div>
    </>
  );
};

export default App