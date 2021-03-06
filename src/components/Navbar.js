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
function Navbar({checkMenu,checkChild,handleCheckChild,handleCheckChild1,handleCheckMenu,handleCheckMenu1}) {
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
                        <Link to="/" onClick={handleCheckMenu1}>
                            <img src={logo_mini}></img>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/" activeClassName="selected" onClick={handleCheckMenu1}>
                            <img src={home}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subjectManagement" onClick={handleCheckMenu}>
                            <img src={book}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/filePrivate" onClick={handleCheckMenu1}>
                            <img src={file}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examQuestions" onClick={handleCheckMenu1}>
                            <img src={bag}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification" onClick={handleCheckMenu1}>
                            <img src={bell}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" onClick={handleCheckMenu1}>
                            <img src={settings}></img>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" onClick={handleCheckMenu1}>
                            <img src={comment}></img>
                        </NavLink>
                    </li>
                </ul>
                <ul className='navbar__text'>
                    <li>
                        <NavLink to="/" activeClassName="selected" onClick={handleCheckMenu1}>
                            <img src={home1} className="img"></img>
                            <img src={home2} className="img1"></img>
                            <span>Trang ch???</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/subjectManagement" onClick={handleCheckMenu}>
                            <img src={book1} className="img"></img>
                            <img src={book2} className="img1"></img>
                            <div className='navbar__text-group'>
                                <span>Qu???n l?? m??n h???c</span>
                                <span
                                onClick={handleCheckChild}
                                style={
                                        checkChild===0&&checkMenu
                                        ?
                                        {
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.015em',
                                            color: '#373839',opacity: '1'
                                        }
                                        :
                                        {
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.015em',
                                            color: '#373839',
                                            opacity: '0.4'
                                        }
                                    }
                                >Danh s??ch m??n h???c</span>
                                <span
                                onClick={handleCheckChild1}
                                style={
                                    checkChild===1&&checkMenu
                                        ?
                                        {
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.015em',
                                            color: '#373839',opacity: '1'
                                        }
                                        :
                                        {
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.015em',
                                            color: '#373839',
                                            opacity: '0.4'
                                        }
                                }
                                >Ph?? duy???t t??i li???u m??n h???c</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/filePrivate" onClick={handleCheckMenu1}>
                            <img src={file1} className="img"></img>
                            <img src={file2} className="img1"></img>
                            <span>T???p ri??ng t??</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examQuestions" onClick={handleCheckMenu1}>
                            <img src={bag1} className="img"></img>
                            <img src={bag2} className="img1"></img>
                            <span>Ng??n h??ng ????? thi</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification" onClick={handleCheckMenu1}>
                            <img src={bell1} className="img"></img>
                            <img src={bell2} className="img1"></img>
                            <span>Th??ng b??o</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" onClick={handleCheckMenu1}>
                            <img src={settings1} className="img"></img>
                            <img src={settings2} className="img1"></img>
                            <span>C??i ?????t h??? th???ng</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" onClick={handleCheckMenu1}>
                            <img src={comment1} className="img"></img>
                            <img src={comment2} className="img1"></img>
                            <span>Tr??? gi??p</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar