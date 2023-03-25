import React from 'react'
import { Outlet } from 'react-router-dom'
import Chat from '../../components/Chat/Chat'

import Profile from '../../components/Profile/Profile'
import Sidebar from '../../components/Sidebar/Sidebar'
import './ProfilePage.css'

function ProfilePage() {
  return (
    <>
    <div className='profilepage'>
      <Sidebar/>
      <Outlet/>

      
    </div>
   
    </>
  )
}

export default ProfilePage