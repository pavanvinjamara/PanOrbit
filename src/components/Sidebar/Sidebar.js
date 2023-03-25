import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  
  

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
    
  };

  

  

  return (
    <div className='sidebar'>
      <div className='side'>
        <div className='p-contain' >
          <p
            className={`line ${activeIndex === 0 ? 'active' : ''}` }
             onClick={() => handleClick(0)}

          >
            <Link
              to='/profilepage'
              className={`link ${activeIndex !== 0 && 'inactive'}`}
            >
              Profile
            </Link>
            {activeIndex === 0 && <FontAwesomeIcon icon={faChevronRight} className='f-icon' />}
          </p>
        </div>
        <div className='p-contain'>
          <p
            className={`line ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick(1)}
          >
            <Link
              to='/profilepage/post'
              className={`link ${activeIndex !== 1 && 'inactive'}`}
            >
              Post
            </Link>
            {activeIndex === 1 && <FontAwesomeIcon icon={faChevronRight} className='f-icon' />}
          </p>
        </div>
        <div className='p-contain'>
          <p
            className={`line ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick(2)}
          >
            <Link
              to='/profilepage/gallery'
              className={`link ${activeIndex !== 2 && 'inactive'}`}
            >
              Gallery
            </Link>
            {activeIndex === 2 && <FontAwesomeIcon icon={faChevronRight} className='f-icon' />}
          </p>
        </div>
        <div className='p-contain'>
          <p
            className={`line ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleClick(3)}
          >
            <Link
              to='/profilepage/todo'
              className={`link ${activeIndex !== 3 && 'inactive'}`}
            >
              ToDo
            </Link>
            {activeIndex === 3 && <FontAwesomeIcon icon={faChevronRight} className='f-icon' />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
