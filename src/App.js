import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ref, set, getDatabase, onValue} from 'firebase/database'
import Router from "./router/Router";
import db from './Firebase.js'
import "./sass/app.scss"
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AccountIcon from "./components/AccountIcon";
function App() {
  //kiem tra dang nhap
  const [checkLogin,setCheckLogin] = useState(false)
  const handleLogin = () =>{
    setCheckLogin(!checkLogin)
  }
  //NAVBAR-Kiem tra nguoi dung click vao phan nao cua muc Quan Ly mon hoc
  const [checkChild,setCheckChild] = useState(0)
  const [checkMenu,setCheckMenu] = useState(false)
  const handleCheckChild = ()=>{
    setCheckChild(0)
  }
  const handleCheckChild1 = ()=>{
      setCheckChild(1)
  }
  const handleCheckMenu = ()=>{
    setCheckMenu(true)
  }
  const handleCheckMenu1 = ()=>{
    setCheckMenu(false)
  }
  return (
    <BrowserRouter>
        <div className="app">
            {
              !checkLogin&&<Login handleLogin={handleLogin}/>
            }
            {
              checkLogin&&<Navbar checkMenu={checkMenu} checkChild={checkChild} handleCheckChild={handleCheckChild} handleCheckChild1={handleCheckChild1} handleCheckMenu={handleCheckMenu} handleCheckMenu1={handleCheckMenu1}/>
            }
            {
              checkLogin&&<AccountIcon handleCheckMenu={handleCheckMenu1} handleLogin={handleLogin}/>
            }
            {
              checkLogin&&<Router checkMenu={checkMenu} checkChild={checkChild}/>
            }
        </div>
    </BrowserRouter>
  );
}

export default App;
