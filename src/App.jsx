import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import SignIn from "./auth/Signin";
import SignUp from "./auth/Signup";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels.jsx";
import UserLayout from "./Layouts/UserLayout.jsx";
import Destination from "./Components/Destination.jsx";
import TravelPackages from "./Components/TravelPackages.jsx";
import HotelPage from "./HotelPages/HotelPage.jsx";
import DestinationPage from "./DestinationPage/DestinationPage.jsx";
import TravelPackagesPage from "./TravelPackages/TravelPackagesPage.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";
import ManageHotel from "./Dashboard/ManageHotel.jsx";
import ManageTravelPackages from "./Dashboard/ManageTravelPackages.jsx";
import ManageDestination from "./Dashboard/ManageDestination.jsx";
import Protected from "./Protected/Protected.jsx";
import RedirectIfAuthenticated from "./Protected/RedirectIfAuthenticated.jsx";
import ManageBooking from "./Dashboard/ManageBooking.jsx";
import ManageThingsToDo from "./Dashboard/ManageThingsToDo.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/Signin"
          element={
            <RedirectIfAuthenticated>
              <SignIn />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/Signup"
          element={
            <RedirectIfAuthenticated>
              <SignUp />
              //{" "}
            </RedirectIfAuthenticated>
          }
        />

        <Route
          path="/"
          element={
            <RedirectIfAuthenticated>
              <SignIn />
            </RedirectIfAuthenticated>
          }
        />

        <Route path="user/LandingPage" element={<LandingPage />} />

        {/* Protected Routes for User Layout */}
        <Route
          path="/user"
          element={
            <Protected allowedRoles={["User"]}>
              <UserLayout />
            </Protected>
          }
        >
          {/* <Route path="/user" element={<UserLayout />}> */}
          <Route path="Home" element={<Home />} /> {/* using outlet */}
          <Route path="destination" element={<Destination />} />
          <Route path="destination/:id" element={<DestinationPage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<HotelPage />} />
          <Route path="travelPackages" element={<TravelPackages />} />
          <Route path="travelPackages/:id" element={<TravelPackagesPage />} />
          <Route path="UserProfile" element={<UserProfile />} />
        </Route>

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <Protected allowedRoles={["Admin"]}>
              {/* <RedirectIfAuthenticated> */}
              <DashboardLayout />
              {/* </RedirectIfAuthenticated> */}
            </Protected>
          }
        >
          {/* <Route element={<RedirectIfAuthenticated />}> */}
          <Route path="manage-hotels" element={<ManageHotel />} />
          <Route
            path="manage-travelPackages"
            element={<ManageTravelPackages />}
          />
          <Route path="things-to-do" element={<ManageThingsToDo />} />
          <Route path="destination" element={<ManageDestination />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
