import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Index from './Index'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Contact from './Contact'
import User from './User'
import Admin from './Admin'
import Logout from './Logout'
import Email from './Email'
import ForgotPassword from './ForgotPassword'
import ManageUsers from './ManageUsers'
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import UserPost from './UserPost'
import CreatePost from './CreatePost'
import AdminUserPost from './AdminUserPost'
import About from './About'

export default function Routing() {
  return (
    <div>
         <Router>
            <Routes>
                <Route path='/' element={<Index />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/signin' element={<SignIn />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/user' element={<User />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/admin/manageusers' element={<ManageUsers />}></Route>
                <Route path='/admin' element={ <Admin />}></Route>
                <Route path='/email' element={<Email />}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
                <Route path='/user/changepassword' element={<ChangePassword />}></Route>
                <Route path='/user/editprofile' element={<EditProfile />}></Route>
                <Route path='/user/post' element={<UserPost />}></Route>
                <Route path='/user/addpost' element={<CreatePost />}></Route>
                <Route path='/admin/userpost' element={<AdminUserPost />}></Route>
            </Routes>
         </Router>
    </div>
  )
}
