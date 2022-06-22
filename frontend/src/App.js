import './App.css';
import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import HomeScreen from "./page/HomeScreen";
import FooterComponent from "./components/FooterComponent";
import RegisterScreen from "./page/RegisterScreen";
import LoginScreen from "./page/LoginScreen";
import DashboardScreen from "./page/DashboardScreen";
import PrivateRouter from "./PrivateRouter";
import AddEventScreen from "./page/AddEventScreen";
import {useSelector} from "react-redux";

 
function Layout() {
  return (
      <main>
        <Outlet />
      </main>
  );
}

function App() {
  const {isAuthenticated,userInfo} = useSelector((state) => state.userLogin);
  console.log(userInfo);

  return (
      <div className="App">
          <Router>
              <HeaderComponent/>

                <Routes>

                  {/*<Route*/}
                  {/*  path="/dashboard"*/}
                  {/*  element={*/}
                  {/*    <PrivateRouter isAuthenticated={isAuthenticated}>*/}
                  {/*      <DashboardScreen/>*/}
                  {/*    </PrivateRouter>*/}
                  {/*  }*/}
                  {/*/>*/}
                 
                  <Route
                      path="/dashboard"
                      index
                      element={
                        <PrivateRouter isAuthenticated={isAuthenticated}>
                            <Shipping />
                        </PrivateRouter>
                      }
                      
                  />


                    <Route path="/" element={<Layout />}>

                        <Route index element={<HomeScreen/>} />
                        <Route path="register" element={<RegisterScreen/>} />
                        <Route path="login" element={<LoginScreen/>} />
                        <Route path="event" element={<AddEventScreen/>} />

                    </Route>
                    

                </Routes>

              <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
