import './App.css';
import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomeScreen from "./page/HomeScreen";
import FooterComponent from "./components/FooterComponent";
import RegisterScreen from "./page/RegisterScreen";
import LoginScreen from "./page/LoginScreen";
import DashboardScreen from "./page/DashboardScreen";
import PrivateRouter from "./PrivateRouter";
import AddEventScreen from "./page/AddEventScreen";
import {useSelector} from "react-redux";


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
                  <Route element={<PrivateRouter isAuthenticated={isAuthenticated}/>}>
                    <Route element={<DashboardScreen/>} path="/dashboard" />
                    {/*<Route element={<Products/>} path="/products"/>*/}
                  </Route>
                      <Route path="/" element={<HomeScreen/>} />
                      <Route path="/register" element={<RegisterScreen/>} />
                      <Route path="/login" element={<LoginScreen/>} />
                      <Route path="/event" element={<AddEventScreen/>} />

                </Routes>

              <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
