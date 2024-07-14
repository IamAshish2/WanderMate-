import { useState ,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import SignIn from "./auth/Signin"
import SignUp from "./auth/Signup"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/Signin' element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
