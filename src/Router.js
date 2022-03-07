// ./src/Router.js
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
// import PetsState from "./context/Pets/PetsState";
import UsersState from "./context/Users/UsersState";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import Auth from "./routes/Auth";
import Profile from "./components/Users/Profile";
import Location from "./components/Main/Location";
import Private from "./routes/Private";
import Form from "./components/utils/forms/Form";
import LocationsState from "./context/Locations/LocationsState";

function Router() {
  return (
    <>
      {/* <PetsState> */}
      <UsersState>
        <LocationsState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* <Route index element={<Home />} /> */}

                {/* localhost:3000/registro */}
                <Route
                  path="registro"
                  element={<Auth component={Register} />}
                />

                {/* localhost:3000/login */}
                <Route path="login" element={<Auth component={Login} />} />

                {/* localhost:3000/profile */}
                <Route path="profile/:userID" element={<Profile />} />

                {/* localhost:3000/locations */}
                <Route
                  path="locations"
                  element={<Private component={Location} />}
                />

                {/* localhost:3000/locations/create */}
                <Route
                  path="locations/:option"
                  element={<Private component={Form} model={"location"} />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </LocationsState>
      </UsersState>
      {/* </PetsState> */}
    </>
  );
}

export default Router;
