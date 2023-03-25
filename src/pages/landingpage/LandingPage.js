import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';

import './LandingPage.css'
import BgLanding from '../../assets/bglanding.png'
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() =>{
    fetch('https://panorbit.in/api/users.json')
    .then(response => response.json())
    .then(data => setUsers(data.users))
    .catch(error => console.error(error));
  }, []);
  
  function handleSelUser(user){
    dispatch({ type: 'SELECT_USER', payload: user});
    navigate("/profilepage")
  }

  return (
    <div className='landing-page' >
        <img src={BgLanding} alt=""/> 
        
        <div className='info-section'>
        <h1>Select an account</h1>
        <div className='scroll-div'>
          <ul className='info'>
            {
              users.map(user => (
                <li key={user.id} onClick={()=>handleSelUser(user)}>
                  <div className='contain'>                  <img src={user.profilepicture} alt="profile pic and name of the user" className='profile-pic'/>
                  <p>{user.name}</p>
                  </div>

                </li>
              ))
            }
          </ul>
          </div>
        </div>
    </div>
  )
}

export default LandingPage