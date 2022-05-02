import React from 'react'
import '../sass/accountIcon.scss'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'
function AccountIcon({handleLogin}) {
  return (
    <div className='accountIcon'>
        <div className='accountIcon__group'>
            <img src={user}></img>
            <span>Admin</span>
        </div>
        <div className='accountIcon__ruler'>

        </div>
        <div className='accountIcon__logout'>
            <Link to='/' onClick={handleLogin}>
                Đăng xuất
            </Link>
        </div>
    </div>
  )
}

export default AccountIcon