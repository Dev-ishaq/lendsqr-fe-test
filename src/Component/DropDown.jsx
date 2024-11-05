import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DropDown = () => {
  // State to handle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the dropdown container
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // useEffect to add and clean up the event listener
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Dropdown button */}
      <button onClick={toggleDropdown} style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}>
        <i className='fa-solid fa-ellipsis-vertical text-dark'></i>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '-8.7rem',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
            borderRadius: '4px',
            width: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
            zIndex: 1,
          }}
        >  
          <ul style={{ padding: '10px', margin: 0 }}>
            <Link to={'/user'} style={{ padding: '8px 12px', cursor: 'pointer', color: 'darkblue', fontSize: '13px' }} onClick={toggleDropdown}>
              <i className="fa-regular fa-eye"></i> View Details
            </Link><br /><br />
            <Link style={{ padding: '8px 12px', cursor: 'pointer', color: 'darkblue', fontSize: '13px' }} onClick={toggleDropdown}>
              <i className="fa-solid fa-user-xmark"></i> Blacklist User
            </Link><br /><br />
            <Link style={{ padding: '8px 12px', cursor: 'pointer', color: 'darkblue', fontSize: '13px' }} onClick={toggleDropdown}>
              <i className="fa-solid fa-user-check"></i> Activate User
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
