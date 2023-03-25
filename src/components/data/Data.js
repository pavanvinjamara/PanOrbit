import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';

import './Data.css';
import { useNavigate } from 'react-router-dom';
function Data() {
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
    <div className='data-comp' >
       
        
       
       
        <div className='scroll-div-data'>
          <ul className='info-data'>
            {
              users.map(user => (
                <li key={user.id} onClick={()=>handleSelUser(user)}>
                <div className='contain-data'>                  <img src={user.profilepicture} alt="profile pic and name of the user" className='profile-pic-data'/>
                  <p>{user.name}</p>
                </div>

               </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Data