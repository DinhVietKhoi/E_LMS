import React from 'react'
import {Route,Routes} from 'react-router-dom'
import FilePrivate from '../pages/FilePrivate'
import Home from '../pages/Home'
import SubjectManagement from '../pages/SubjectManagement'
import ExamQuestions from '../pages/ExamQuestions'
import Notification from '../pages/Notification'
import Settings from '../pages/Settings'
import Help from '../pages/Help'
import Account from '../pages/Account'
function Router({checkChild}) {
    //npm install react-router-dom@6

    return (
        <Routes> 
            <Route path="/" element={<Home />}></Route>
            <Route path="/subjectManagement" element={<SubjectManagement checkChild={checkChild}/>}></Route>
            <Route path="/filePrivate" element={<FilePrivate />}></Route>
            <Route path="/examQuestions" element={<ExamQuestions />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/account" element={<Account />}></Route>
        </Routes>
    )
}

export default Router