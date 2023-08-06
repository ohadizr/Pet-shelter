import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route, } from "react-router-dom";
import OurMission from './Pages/OurMission';
import Adopt from './Pages/Adopt';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContextProvider';
function App() {
  const { userDataStored, userData, setUserData,isLogged, setIsLogged } = useContext(AuthContext);
  //listen to is logged and render if changed from true to false or false to true
  useEffect(() => {
    console.log("isLogged", isLogged);
  }, [isLogged]);

//console log "all the way button" when the user scrolls to the bottom of the page
  const [bottomOfPage, setBottomOfPage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >= 
        document.documentElement.scrollHeight;
      if (bottom) {

        setBottomOfPage(true);
      } else {
        setBottomOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
  <>
  <div className='appContainer'>
  <div className='headerApp'>

  <Header/> 
  </div>
<div className='bodyApp'>
   <Routes>
      <Route path="" >

        <Route path="" element={ <Home/>} />
        <Route path="contact" element={ <Contact/>} />
        <Route path="ourmission" element={ <OurMission/>} />
        <Route path="adopt" element={ <Adopt/>} />
        {/* <Route path="singup" element={ <Signup/>} /> */}
        {/* <Route path="profile" element={ <Profile/>} /> */}
        {isLogged ? 
          <Route path="profile" element={ <Profile/>} />
         : 
        <>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        </>
        }


      </Route>
      </Routes>
  </div>
  
 {/* <div className='footerApp'> */}
 {bottomOfPage ? <Footer/>: null}
 {/* </div> */}
 </div>
  </>
  );
}

export default App;
