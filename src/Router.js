// ./src/Router.js

//EXTERNAL PACKAGE IMPORTS
import { Routes, Route, BrowserRouter } from "react-router-dom";

// INTERNAL IMPORTS
// --- STATES ---
import UsersState from "./context/Users/UsersState";
import LocationsState from "./context/Locations/LocationsState";
import ItemsState from "./context/Items/ItemsState";
import FilteredItemsState from "./context/FilteredItems/FilteredItemsState";

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
// HOME
import Home from "./components/Home/Home";
// USER
import Profile from "./components/Users/Profile";
// LOCATIONS
import Locations from "./components/Main/Locations";
import LocationCreate from "./components/Main/LocationCreate";
import LocationDetails from "./components/Main/LocationDetails";
import LocationEdit from "./components/Main/LocationEdit";
// ITEMS
import Items from "./components/Main/Items";
import ItemCreate from "./components/Main/ItemCreate";
import ItemEdit from "./components/Main/ItemEdit";
// ERROR
import ErrorPage from "./components/Main/ErrorPage";

function Router() {
  return (
    <>
      <FilteredItemsState>
        <ItemsState>
          <LocationsState>
            <UsersState>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    {/* localhost:3000/signup*/}
                    <Route
                      path="signup"
                      element={<NoLoggedUser component={SignUp} />}
                    />

                    {/* localhost:3000/login */}
                    <Route
                      path="signin"
                      element={<NoLoggedUser component={SignIn} />}
                    />

                    {/* localhost:3000/profile */}
                    <Route
                      path="profile/:userID"
                      element={<LoggedUser component={Profile} />}
                    />

                    {/* localhost:3000/locations */}
                    <Route
                      path="locations"
                      element={<LoggedUser component={Locations} />}
                    />

                    {/* localhost:3000/locations/create */}
                    <Route
                      path="locations/create"
                      element={<LoggedUser component={LocationCreate} />}
                    />

                    {/* localhost:3000/locations/id */}
                    <Route
                      path="locations/:id/"
                      element={<LoggedUser component={LocationDetails} />}
                    />

                    {/* localhost:3000/locations/edit */}
                    <Route
                      path="locations/:id/edit"
                      element={<LoggedUser component={LocationEdit} />}
                    />

                    {/* localhost:3000/items */}
                    <Route
                      path="items"
                      element={<LoggedUser component={Items} />}
                    />

                    {/* localhost:3000/items/create */}
                    <Route
                      path="items/create/:id"
                      element={<LoggedUser component={ItemCreate} />}
                    />

                    {/* localhost:3000/edit/edit */}
                    <Route
                      path="items/:id/edit"
                      element={<LoggedUser component={ItemEdit} />}
                    />

                    {/* localhost:3000/edit/edit */}
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </UsersState>
          </LocationsState>
        </ItemsState>
      </FilteredItemsState>
    </>
  );
}

export default Router;
