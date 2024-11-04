import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MenuDropDown = () => {
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
       <div className="contain" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
       }}>
        <Link style={{ fontSize: '12px', color: 'rgb(12, 72, 122)' }}>GENERAL DETAILS</Link>
        <Link style={{ fontSize: '12px', color: 'rgb(12, 72, 122)' }}>DOCUMENTS</Link>
        <button onClick={toggleDropdown} style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}>
          <Link style={{ fontSize: '12px', color: 'rgb(12, 72, 122)' }}>MORE <i class="fa fa-caret-down"></i></Link>
        </button>
       </div>

     {/* Dropdown menu */}
     {isOpen && (
       <div
         style={{
           position: 'absolute',
           top: '100%',
           left: '9rem',
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
         <ul style={{ padding: '10px', margin: 0, height: '15vh', width: '100%' }}>
           <Link style={{ padding: '10px', cursor: 'pointer', color: 'rgb(12, 72, 122)', fontSize: '14px' }} onClick={toggleDropdown}>
              Bank Details
           </Link><br />
           <Link style={{ padding: '10px', cursor: 'pointer', color: 'rgb(12, 72, 122)', fontSize: '14px' }} onClick={toggleDropdown}>
             Loan
           </Link><br />
           <Link style={{ padding: '10px', cursor: 'pointer', color: 'rgb(12, 72, 122)', fontSize: '14px' }} onClick={toggleDropdown}>
             Savings
           </Link><br />
           <Link style={{ padding: '10px', cursor: 'pointer', color: 'rgb(12, 72, 122)', fontSize: '14px' }} onClick={toggleDropdown}>
             App and System
           </Link>
         </ul>
       </div>
     )}
   </div>
 );
}

export default MenuDropDown
