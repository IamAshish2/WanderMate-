//outlet from react router dom 

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx"
import SignIn from "./auth/Signin"
import SignUp from "./auth/Signup"
import Home from "./Components/Home"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path='/Signin' element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
