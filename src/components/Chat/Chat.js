import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Chat.css';

function Chat() {
  const [users, setUsers] = useState([]);
  const [isChatListHidden, setIsChatListHidden] = useState(true);
  const [chatListIcon, setChatListIcon] = useState(faChevronDown);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  function handleSelUser(user) {
    dispatch({ type: 'SELECT_USER', payload: user });
  }

  function toggleChatList() {
    setIsChatListHidden(!isChatListHidden);
    setChatListIcon(isChatListHidden ? faChevronUp : faChevronDown);
  }

  return (
    <div className="chat-comp">
      <div className="div-head" onClick={toggleChatList}>
        <div className="chat-headers">
          <FontAwesomeIcon icon={faMessage} alt="" color="white" className="i-msg" />
          <h4>Chat</h4>
        </div>
        <FontAwesomeIcon icon={chatListIcon} alt="" color="white" className="i-msged" />
      </div>

      <div className="scroll-div-chat" style={{ display: isChatListHidden ? 'none' : 'block' }}>
        <ul className="info-chat">
          {users.map((user) => (
            <li key={user.id} onClick={() => handleSelUser(user)}>
              <div className="contain-chat">
                <img src={user.profilepicture} alt="profile pic and name of the user" className="profile-pic-chat" />
                <p>{user.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chat;
