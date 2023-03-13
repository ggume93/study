import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

import Header from "./components/header/Header.js";

import Home from "./components/home/Home.js";
import Company from "./components/company/Company.js";

import Footer from "./components/footer/Footer.js";

function App() {
     return (
          <Router>
               <Header />
               <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/company" element={<Company />}></Route>
               </Routes>
               <Footer />
          </Router>
     );
}

export default App;
