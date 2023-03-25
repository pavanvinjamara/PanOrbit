import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown, faClose, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Chat.css';

function Chat() {
  const [users, setUsers] = useState([]);
  const [isChatListHidden, setIsChatListHidden] = useState(true);
  const [chatListIcon, setChatListIcon] = useState(faChevronDown);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  function toggleChatList(user) {
    setSelectedUser(user);
    setIsChatListHidden(!isChatListHidden);
    setChatListIcon(isChatListHidden ? faChevronUp : faChevronDown);
  }

  return (
    <>
      <div className="chat-comp">
        <div className="div-head" onClick={() => toggleChatList(null)}>
          <div className="chat-headers">
            <FontAwesomeIcon icon={faMessage} alt="" color="white" className="i-msg" />
            <h4>Chat</h4>
          </div>
          <FontAwesomeIcon icon={chatListIcon} alt="" color="white" className="i-msged" />
        </div>

        <div className="scroll-div-chat" style={{ display: isChatListHidden ? 'none' : 'block' }}>
          <ul className="info-chat">
            {users.map((user) => (
              <li key={user.id}>
                <div className="cont" onClick={() => toggleChatList(user)}>
                  <div className="contain-chat">
                    <img src={user.profilepicture} alt="profile pic and name of the user" className="profile-pic-chat" />
                    <p>{user.name}</p>
                  </div>
                  <div className={`actived ${selectedUser && selectedUser.id === user.id ? 'green' : 'black'}`}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="chatting" style={{ display: selectedUser ? 'block' : 'none' }}>
        <div className="chat-header">
          <div className="headd">
            <img src={selectedUser?.profilepicture} alt="profile pic of selected user" className="selected-profile-pic" />
            <p>{selectedUser?.name}</p>
          </div>
          <FontAwesomeIcon icon={faClose} alt="close" color="white" onClick={() => setSelectedUser(null)} />
        </div>
        <div className='ch-list'>

        </div>
        <div className='msg-input'>
          <input type="text" name="message"/>
          <FontAwesomeIcon icon={faChevronRight} alt="" className='sender-i'/>

        </div>
      </div>
    </>
  );
}

export default Chat;
