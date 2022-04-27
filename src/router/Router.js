import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
function Router() {
    //npm install react-router-dom@6

    return (
        <Routes> 
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}

export default Router