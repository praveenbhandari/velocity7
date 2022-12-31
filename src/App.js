import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Header from "./components/header";

function App() {
  return (
    <Router>
 <div className="App">
      <title>MEDIBLOCK</title>
  
<Header/>
<Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
</Routes>
      
    </div>
    </Router>
   
  );
}

export default App;
