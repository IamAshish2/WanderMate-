//outlet from react router dom 

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import SignIn from "./auth/Signin"
import SignUp from "./auth/Signup"
import Home from "./Components/Home"
import UserLayout from "./Layouts/UserLayout.jsx";
import Destination from "./Components/Destination.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/user' element={<UserLayout/>} > 
              <Route path="Home" element={<Home/>}/> {/* using outlet */}
              <Route path="destination" element={<Destination/>}/>
          </Route>
          
          <Route path='/Signin' element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
