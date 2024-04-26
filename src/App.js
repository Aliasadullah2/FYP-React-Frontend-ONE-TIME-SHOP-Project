import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sectionjs2 from './Pages/Home/Sectionjs2';
import Sectionjs3 from './Pages/Home/Sectionjs3';
import Sectionjs4 from './Pages/Home/Sectionjs4';
import Sectionjs5 from './Pages/Home/Sectionjs5';

import Siginjs from './Pages/Siginjs';
import Signupjs from './Pages/Signupjs';
import Errorjs from './Pages/Errorjs';
import ForgetPassjs from './Pages/ForgetPassjs';
import SetupPassjs from './Pages/SetupPassjs';
import OtpVerifiedjs from './Pages/OtpVerifiedjs';

import Adminjsx from './Pages/Dashboard/Adminjsx';



import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Services/PrivateRoutes';


import Mentor from './Mentor Dashboard/Mentor';
import Buyer from './Mentor Dashboard/Buyer';
import Seller from './Mentor Dashboard/Seller';
import BuyerDS from './Buyer Pages/BuyerDS';
import BuyerFree from './Buyer Pages/BuyerFree';
import SellerFree from './Seller Pages/SellerFree';
import SellerDS from './Seller Pages/SellerDS';
import ProductPage from './Buyer Pages/ProductPage';
import Catagoriesset from './Buyer Pages/Catagoriesset';
import UpdatePage from './Buyer Pages/UpdatePage';
import MyProductPage from './Buyer Pages/MyProductPage';
import ProfileInfo from './Buyer Pages/ProfileInfo';
import SellerProfileInfo from './Seller Pages/SellerProfileInfo';
import MyProfileUpdate from './Buyer Pages/MyProfileUpdate';
import Vender from './Buyer Pages/Vender';
import AddVender from './Vender/AddVender';
import Myvender from './Vender/Myvender';
import VenderUpdatePage from './Vender/VenderUpdatePage';
import Sellerprofileup from './Seller Pages/Sellerprofileup';
import VenderRead from './Vender/VenderRead';
import Reader from './Vender/Reader';
import Settings from './Seller Pages/Settings';
import ReportsAl from './Seller Pages/ReportsAl';
import PasswordsChnage from './Seller Pages/PasswordsChnage';
import AdminDS from './Admin Dashboard/AdminDS';
import AdminMP from './Admin Dashboard/AdminMP';
import AdminPP from './Admin Dashboard/AdminPP';
import AdminUpPage from './Admin Dashboard/AdminUpPage';
import AdminAddVen from './Admin Dashboard/AdminVender/AdminAddVen';
import AdminVenP from './Admin Dashboard/AdminVender/AdminVenP';
import AdminVenRead from './Admin Dashboard/AdminVender/AdminVenRead';
import AdminVenUp from './Admin Dashboard/AdminVender/AdminVenUp';
import AdminPofileup from './Admin Dashboard/AdminPofileup';
import AdminProfile from './Admin Dashboard/AdminProfile';
import AdminProInfo from './Admin Dashboard/AdminProInfo';
import AdminProdS from './Admin Dashboard/Admin Buyer/AdminProdS';
import AdminVenS from './Admin Dashboard/AdminVender/AdminVenS';
// import AdminVenUseR from './Admin Dashboard/AdminVender/AdminVenUseR';
import VenRead from './Admin Dashboard/AdminVender/VenRead';
import AdminRepots from './Admin Dashboard/Admin Report/AdminRepots';
import AddUser from './Admin Dashboard/Admin Users/AddUser';
import AllUserList from './Admin Dashboard/Admin Users/AllUserList';
// import upUserAdmin from './Admin Dashboard/Admin Users/upUserAdmin';
import AdminAddCat from './Admin Dashboard/Admin Catagory/AdminAddCat';
import AdminUserUp from './Admin Dashboard/Admin Users/AdminUserUp';
import AdminUserPass from './Admin Dashboard/Admin Users/AdminUserPass';
import VenderCat from './Vender/VenderCat';



function App() {
  return (
    <>
    
    <Router>
     
      <ToastContainer position='bottom-center'/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Sectionjs2/>}></Route>
        <Route path="/team" element={<Sectionjs3/>}></Route>
        <Route path="/features" element={<Sectionjs4/>}></Route>
        <Route path="/contact" element={<Sectionjs5/>}></Route>
        <Route path="/Sigin" element={<Siginjs/>}></Route>
        <Route path="/Signup" element={<Signupjs/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassjs/>}></Route>
        <Route path="/setpassword" element={<SetupPassjs/>}></Route>
        
        <Route path="/otpverification" element={<OtpVerifiedjs/>}></Route>
        
        <Route path="/categories/:id" element={<Catagoriesset/>}/>
        
        <Route path="/user" element={<PrivateRoutes/>}>
        <Route path="updatepage/:prodId" element={<AdminUpPage/>}/>
        <Route path="updateUser/:userId" element={<AdminUserUp/>}/>
        <Route path="ProductPage/:prodId" element={<AdminPP/>}/>
        <Route path="venderpage/:venId" element={<AdminVenRead/>}/> 
        <Route path="readerven/:venId" element={<VenRead/>}/> 
        <Route path="MyProductPage/:prodId" element={<MyProductPage/>}/>
        <Route path="categories/:id" element={<Catagoriesset/>}/>
        <Route path="myprofile-update/:id" element={<AdminPofileup/>}/>
        <Route path="sellerprofile-update/:id" element={<Sellerprofileup/>}/>
        <Route path="userpasswordchange/:id" element={<AdminUserPass/>}/>
        <Route path="venderuodatepage/:venId" element={<AdminVenUp/>}/>
        
        
        
        <Route path="admin" element={<Adminjsx/>}>
        <Route path="profile-info/:id" element={<AdminProInfo/>}/>
        
        
          
          <Route path="ReportsAlAdmin" element={<AdminRepots/>}/>
          <Route path="AddAdminUser" element={<AddUser/>}/>
          <Route path="BuyerDropshipping" element={<AdminProdS/>}/>
          <Route path="BuyerFreelances" element={<BuyerFree/>}/>
          <Route path="buyervender" element={<AdminVenS/>}/>
          <Route path="Settings" element={<Settings/>}/>
          <Route path="allUserList" element={<AllUserList/>}/>
          <Route path="addcategory" element={<AdminAddCat/>}/>
          
        
          <Route path="sellerprofile-info/:id" element={<SellerProfileInfo/>}/>
          <Route path="SellerDropshipping" element={<AdminDS/>}/>
          <Route path="Settings" element={<Settings/>}/>
          <Route path="SellerFreelances" element={<AdminMP/>}/>
          <Route path="addvender" element={<AdminAddVen/>}/>
          <Route path="myvender" element={<AdminVenP/>}/>
          
        </Route>
        </Route>

        <Route path="/mentor" element={<Mentor/>}>
        <Route path="ProductPage/:prodId" element={<ProductPage/>}/>
        <Route path="venderpage/:venId" element={<VenderRead/>}/> 
        <Route path="readerven/:venId" element={<Reader/>}/> 
        <Route path="MyProductPage/:prodId" element={<MyProductPage/>}/>
        <Route path="categories/:id" element={<Catagoriesset/>}/>
        <Route path="vender/categories/:id" element={<VenderCat/>}/>
        <Route path="myprofile-update/:id" element={<MyProfileUpdate/>}/>
        <Route path="sellerprofile-update/:id" element={<Sellerprofileup/>}/>
        <Route path="passwordchange/:id" element={<PasswordsChnage/>}/>
      
        <Route path="buyer" element={<Buyer/>}>
          <Route path="profile-info/:id" element={<ProfileInfo/>}/>
          
        <Route path="ReportsAl" element={<ReportsAl/>}/>
          <Route path="BuyerDropshipping" element={<BuyerDS/>}/>
          <Route path="BuyerFreelances" element={<BuyerFree/>}/>
          <Route path="buyervender" element={<Vender/>}/>
        <Route path="Settings" element={<Settings/>}/>
          
          
          
        </Route>
        <Route path="updatepage/:prodId" element={<UpdatePage/>}/>
        <Route path="venderuodatepage/:venId" element={<VenderUpdatePage/>}/>
        <Route path="seller" element={<Seller/>}>

          <Route path="sellerprofile-info/:id" element={<SellerProfileInfo/>}/>
          <Route path="SellerDropshipping" element={<SellerDS/>}/>
          <Route path="Settings" element={<Settings/>}/>
          <Route path="SellerFreelances" element={<SellerFree/>}/>
          <Route path="addvender" element={<AddVender/>}/>
          <Route path="myvender" element={<Myvender/>}/>
          

        </Route>

        </Route>
        
        <Route path="/*" element={<Errorjs/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App