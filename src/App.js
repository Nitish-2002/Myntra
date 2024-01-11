import logo from "./logo.svg";
import "./App.css";
// import ArrItems from "./Objects/navbarObj";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Card";
import MainCard from "./Components/MainCard/MainCard";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login"
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import FirstPage from "./Components/FirstPage/FirstPage";
import Category from "./Components/Category/Category"
import LoginSignupPage from "./Components/Login/Login";
import Men from './Components/Items/Men'
function App() {
  // const router=createBrowserRouter([
   
   {/* , */}
    {/* {
      path:"/Login",
      element:<Login/>
    } */}
   
  // ])
  return (
    <> 
    <Navbar />
    {/* <RouterProvider router={router} /> */}

    <Routes >
      <Route  
      path="/" element=
      {
        <>
         {/* <FirstPage />  */}
         <LoginSignupPage />
        </>
      }
      />
      
      <Route  
      path="/homes" element=
      {
        <>
         <FirstPage  /> 
        </>
      }
      />
      <Route  
      path="/Login" element=
      {
        <>
         <Login  /> 
        </>
      }
      />
     <Route path="/Category/men" element={<Category />} />
     <Route path="/Category/women" element={<Category />} />
       </Routes>
      <Footer />  
    </>
  );
}

export default App;
