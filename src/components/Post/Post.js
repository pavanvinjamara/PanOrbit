import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Data from '../data/Data';
import './Post.css'
function Post() {
  const selectedUser = useSelector(state => state.user.selectedUser);
  const [showPopUP, setShowPopUp] = useState(false);
  return (
    <div className='post'>
       <div className='header'>
            <h1 onClick={()=>setShowPopUp(false)}>Profile</h1>
            <div className='info-1' onClick={()=>setShowPopUp(true)}>
            <img src={selectedUser.profilepicture} alt="profile pic and name of the user"  />
            <p>{selectedUser.name}</p>

            { showPopUP && <div className='pop-div'>
              <img src={selectedUser.profilepicture} alt=""/>
              <h4>{selectedUser.name}</h4>
              <p>{selectedUser.email}</p>
              <div><Data/></div>
              <button><Link to="/" className="link">Sign Out</Link></button>
              </div>}
            </div>
            </div>
    </div>
  )
}

export default Post