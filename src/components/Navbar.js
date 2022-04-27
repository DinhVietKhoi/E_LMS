import React, { useState } from 'react'
import '../sass/navbar.scss'
import home from '../assets/home.png'
import bag from '../assets/bag.png'
import bell from '../assets/bell.png'
import file from '../assets/file.png'
import settings from '../assets/settings.png'
import book from '../assets/book.png'
import comment from '../assets/comment.png'
import logo_mini from '../assets/Logo_mini.png'
import { Link } from 'react-router-dom'
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
                        <Link to="/">
                            <img src={home}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={book}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={file}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={bag}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={bell}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={settings}></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={comment}></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar