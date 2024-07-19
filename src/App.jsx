//outlet from react router dom 

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import SignIn from "./auth/Signin"
import SignUp from "./auth/Signup"
import Home from "./Components/Home"
import Hotels from "./Components/Hotels.jsx";
import UserLayout from "./Layouts/UserLayout.jsx";
import Destination from "./Components/Destination.jsx";
import TravelPackages from "./Components/TravelPackages.jsx";
import HotelPage from "./HotelPages/HotelPage.jsx";
import DestinationPage from "../DestinationPage/DestinationPage.jsx";
import TravelPackagesPage from "../TravelPackages/TravelPackagesPage.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/user' element={<UserLayout/>} > 
              <Route path="Home" element={<Home/>}/> {/* using outlet */}

              <Route path="destination" element={<Destination/>}/>
              <Route path="destination/:id" element={<DestinationPage/>}/>

              <Route path="hotels" element={<Hotels/>}/>
              <Route path="hotels/:id" element={<HotelPage/>} /> 
              
              <Route path="TravelPackages" element={<TravelPackages/>}/>
              <Route path="TravelPackages/:id" element={<TravelPackagesPage/>} />
          </Route>
          
         

          <Route path='/Signin' element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
