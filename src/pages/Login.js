import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgLogin from '../assets/bgLogin.png'
import logo from '../assets/logo.png'
import passwordIcon from '../assets/passwordIcon.png'
import userIcon from '../assets/userIcon.png'
import '../sass/login.scss'
function Login({handleCheckMenu,handleLogin}) {
    //kiem tra input user,password,code
    const [checkUser,setCheckUser] = useState('')
    const [checkPassword,setCheckPassword] = useState('')
    const [checkCode,setCheckCode] = useState('')


    //xu ly chuyen form login, forgot password
    const [classSlide,setClassSlide] = useState('login__container')
    const handleSlide = ()=>{
        setCheckUser('')
        setCheckPassword('')
        setCheckCode('')
        classSlide==='login__container'
        ?
        setClassSlide('login__container slide')
        :
        setClassSlide('login__container')
    }
    return (
        <div className='login'>
            <img src={bgLogin} className="login__bg"></img>
            <img src={logo} className="login__logo"></img>
            <div className={classSlide}>
                <div className='login__app slide'>
                    <h3 className='login__app-title'>Đăng nhập</h3>
                    <div className='login__app-group'>
                        <span>Tên đăng nhập</span>
                        <div className='login__app-input'>
                            <img src={userIcon}></img>
                            <input value={checkUser} onChange={(e)=>setCheckUser(e.target.value)} style={checkUser!==''?{border: '1px solid rgba(55, 56, 57, 0.5)'}:{background: '#F2F2F2'}}></input>
                        </div>
                    </div>
                    <div className='login__app-group'>
                        <span>Mật khẩu</span>
                        <div className='login__app-input'>
                            <img src={passwordIcon}></img>
                            <input value={checkPassword} type='password' onChange={(e)=>setCheckPassword(e.target.value)} style={checkPassword!==''?{border: '1px solid rgba(55, 56, 57, 0.5)'}:{background: '#F2F2F2'}}></input>
                        </div>
                    </div>
                    <span className='login__app-forgot' onClick={handleSlide}>Quên mật khẩu?</span>
                    <button className='login__app-submit' onClick={handleLogin}> Đăng nhập </button>
                </div>

                <div className='login__forgotP'>
                    <h3 className='login__forgotP-title'>Cấp lại mật khẩu</h3>
                    <div className='login__forgotP-group'>
                        <span>Tên đăng nhập</span>
                        <div className='login__forgotP-input'>
                            <img src={userIcon}></img>
                            <input value={checkUser} onChange={(e)=>setCheckUser(e.target.value)} style={checkUser!==''?{border: '1px solid rgba(55, 56, 57, 0.5)'}:{background: '#F2F2F2'}}></input>
                        </div>
                    </div>
                    <div className='login__forgotP-group'>
                        <span>Mã xác thực</span>
                        <div className='login__forgotP-input no-icon'>
                            <input value={checkCode} onChange={(e)=>setCheckCode(e.target.value)} style={checkCode!==''?{border: '1px solid rgba(55, 56, 57, 0.5)'}:{background: '#F2F2F2'}}></input>
                        </div>
                    </div>
                    <span className='login__forgotP-forgot' onClick={handleSlide}>
                        <i className="fa-solid fa-angle-left"></i>
                        Quay lại trang chủ
                    </span>
                    <button className='login__forgotP-submit' style={checkCode!=''&&checkUser!=''?{background: 'linear-gradient(270deg, #FF5400 0%, #F17F21 80.56%)'}:{background: '#C9C4C0'}}> Cấp lại mật khẩu </button>
                </div>
            </div>
        </div>
    )
}

export default Login