// ./src/Router.js

//EXTERNAL PACKAGE IMPORTS
import { Routes, Route, BrowserRouter } from "react-router-dom";

// INTERNAL IMPORTS
// --- STATES ---
import UsersState from "./context/Users/UsersState";
import LocationsState from "./context/Locations/LocationsState";
// --- VISUAL COMPONENTS ---
// LAYOUT
import Layout from "./components/Layout/Layout";
// --- AUTH COMPONENTS ---
// ROUTE GUARDS
import NoLoggedUser from "./routes/NoLoggedUser";
import LoggedUser from "./routes/LoggedUser";
// USER MANAGEMENT
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
// --- RENDERING COMPONENTS ---
// USER
import Profile from "./components/Users/Profile";
// LOCATIONS
import Form from "./components/utils/forms/Form";
import Location from "./components/Main/Locations";
import LocationCreate from "./components/Main/LocationCreate";
import LocationDetails from "./components/Main/LocationDetails";
import LocationEdit from "./components/Main/LocationEdit";



function Router() {
  return (
    <>
      <LocationsState>
        <UsersState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* <Route index element={<Home />} /> */}

                {/* localhost:3000/signup*/}
                <Route path="signup" element={<NoLoggedUser component={SignUp} />} />

                {/* localhost:3000/login */}
                <Route path="signin" element={<NoLoggedUser component={SignIn} />} />

                {/* localhost:3000/profile */}
                <Route path="profile/:userID" element={<Profile />} />

                {/* localhost:3000/locations */}
                <Route path="locations" element={<LoggedUser component={Location} />} />

                {/* localhost:3000/locations/create */}
                <Route
                  path="locations/create" element={<LoggedUser component={LocationCreate}/>} />

                {/* localhost:3000/locations/create */}
                <Route
                  path="locations/:id/"
                  element={
                    <LoggedUser component={LocationDetails} />
                  }
                />

                {/* localhost:3000/locations/create */}
                <Route
                  path="locations/:id/edit"
                  element={
                    <LoggedUser component={LocationEdit} />
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </UsersState>
      </LocationsState>
    </>
  );
}

export default Router;
