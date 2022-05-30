import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import './index.css';
import Information from "./Information";

import Form from "./Form";
import Four from './Four';
import Bank from "./Bank";
import Lista from "./Lista";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate// redirect
} from "react-router-dom";


const App = () => {
  return (
    <Router>
    <Navbar />
    
    <Routes>
    <Route exact path="/accn" element={<Lista />} />
    </Routes>

    <Routes>
    <Route exact path="/form" element={<Form />} />
    </Routes>

    <Routes>
    <Route exact path="/four" element={<Information />} />
    </Routes>

    <Routes>
    <Route exact path="/bank" element={<Bank />} />
    </Routes>


    </Router>

    );
}

export default App;
