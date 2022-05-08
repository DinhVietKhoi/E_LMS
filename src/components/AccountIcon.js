import React from 'react'
import '../sass/accountIcon.scss'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'
function AccountIcon({handleCheckMenu,handleLogin}) {
  const handleLogout = ()=>{
    handleLogin()
    handleCheckMenu()
  }
  return (
    <div className='accountIcon'>
        <Link to="/account" className='accountIcon__group'>
            <img src={user}></img>
            <span >Admin</span>
        </Link>
        <div className='accountIcon__ruler'>

        </div>
        <div className='accountIcon__logout'>
            <Link to='/' onClick={handleLogout}>
                Đăng xuất
            </Link>
        </div>
    </div>
  )
}

export default AccountIcon