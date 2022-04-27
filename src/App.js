import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ref, set, getDatabase, onValue} from 'firebase/database'
import Router from "./router/Router";
import db from './Firebase.js'
import "./sass/base.scss"
import "./sass/app.scss"
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
function App() {
  //kiem tra dang nhap
  const [checkLogin,setCheckLogin] = useState(false)
  const handleLogin = () =>{
    setCheckLogin(!checkLogin)
  }
  return (
    <BrowserRouter>
        <div className="app">
            {
              !checkLogin&&<Login handleLogin={handleLogin}/>
            }
            {
              checkLogin&&<Navbar />
            }
            {
              checkLogin&&<Router />
            }
        </div>
    </BrowserRouter>
  );
}

export default App;
