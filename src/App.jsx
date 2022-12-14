import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Homepage";
import ImcCalculator from "./pages/ImcCalculator";
import AgeCalculator from "./pages/AgeCalculator";
import Clockpage from "./pages/Clockpage";
import AboutPage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= {<HomePage />}></Route>
          <Route path="/imc" element={<ImcCalculator />}></Route>
          <Route path="/age" element={<AgeCalculator />}></Route>
          <Route  path="/clock" element={<Clockpage />}></Route>
          <Route path="/about" element={<AboutPage />} ></Route>
          <Route path="/contact" element={<Contactpage />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;