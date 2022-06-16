import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import HomeScreen from "./page/HomeScreen";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
      <div className="App">
          <Router>
              <HeaderComponent/>
                <Routes>
                  <Route exact path="/" element={<HomeScreen/>} />
                  {/*<Route exact path="/detail/:id" element={<Detail/>} />*/}
                </Routes>
              <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
