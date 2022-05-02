import React, { useState } from 'react'
import '../sass/navbar.scss'
import home from '../assets/home.png'
import bag from '../assets/bag.png'
import bell from '../assets/bell.png'
import file from '../assets/file.png'
import settings from '../assets/settings.png'
import book from '../assets/book.png'
import comment from '../assets/comment.png'
import home1 from '../assets/home1.png'
import bag1 from '../assets/bag1.png'
import bell1 from '../assets/bell1.png'
import file1 from '../assets/file1.png'
import settings1 from '../assets/settings1.png'
import book1 from '../assets/book1.png'
import comment1 from '../assets/comment1.png'
import home2 from '../assets/home2.png'
import bag2 from '../assets/bag2.png'
import bell2 from '../assets/bell2.png'
import file2 from '../assets/file2.png'
import settings2 from '../assets/settings2.png'
import book2 from '../assets/book2.png'
import comment2 from '../assets/comment2.png'
import logo_mini from '../assets/Logo_mini.png'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
    const [classText,SetClassText] = useState('navbar__container')
    const handleShow =()=>{
        classText==='navbar__container'
        ?
        SetClassText('navbar__container show')
        :
        SetClassText('navbar__container')
    }
    return (
        <div className='navbar left'>
            <div className={classText} onMouseEnter={handleShow} onMouseLeave={handleShow}>
                <ul className='navbar__icon'>
                    <li>
                        <Link to="/">
                            <img src={logo_mini}></img>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            <img src={home}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subjectManagement">
                            <img src={book}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/filePrivate">
                            <img src={file}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examQuestions">
                            <img src={bag}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification">
                            <img src={bell}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <img src={settings}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help">
                            <img src={comment}></img>
                        </NavLink>
                    </li>
                </ul>
                <ul className='navbar__text'>
                    <li>
                        <NavLink to="/" activeClassName="selected">
                            <img src={home1} className="img"></img>
                            <img src={home2} className="img1"></img>
                            <span>Trang chủ</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subjectManagement">
                            <img src={book1} className="img"></img>
                            <img src={book2} className="img1"></img>
                            <div className='navbar__text-group'>
                                <span>Quản lý môn học</span>
                                <span>Danh sách môn học</span>
                                <span>Phê duyệt tài liệu môn học</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/filePrivate">
                            <img src={file1} className="img"></img>
                            <img src={file2} className="img1"></img>
                            <span>Tệp riêng tư</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examQuestions">
                            <img src={bag1} className="img"></img>
                            <img src={bag2} className="img1"></img>
                            <span>Ngân hàng đề thi</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification">
                            <img src={bell1} className="img"></img>
                            <img src={bell2} className="img1"></img>
                            <span>Thông báo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <img src={settings1} className="img"></img>
                            <img src={settings2} className="img1"></img>
                            <span>Cài đặt hệ thống</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help">
                            <img src={comment1} className="img"></img>
                            <img src={comment2} className="img1"></img>
                            <span>Trợ giúp</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar