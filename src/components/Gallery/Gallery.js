import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Gallery.css'
import Data from '../data/Data';
import { Link } from "react-router-dom" 

function Gallery() {
  const selectedUser = useSelector(state => state.user.selectedUser);
  const [showPopUP, setShowPopUp] = useState(false);
  return (
    <div className='gallery'>
      <div className='header'>
            <h1 onClick={()=>setShowPopUp(false)}>Gallery</h1>
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

export default Gallery