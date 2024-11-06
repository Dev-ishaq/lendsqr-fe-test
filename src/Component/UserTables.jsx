import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UserTables.css';
import '../assets/css/Ut.css';
import DropDown from './DropDown';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableRef = useRef(null);

  // useEffect(() => {
  //   fetch(`https://localhost:8000/users`)//api
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);
  useEffect(() => {
    // Fetch the data from JSON in the public folder
    fetch('/db.json') // Adjusted path
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  

  // Get current users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="table-container">
      

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="mmm">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <label>Organization:</label>
                <select>
                  <option value="">Select</option>
                </select>
                <label>Username:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required />
                <label>Date:</label>
                <input type="date" required/>
                <label>Phone Number:</label>
                <input type="tel" required />
                <label>Status:</label>
                <select>
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Pending</option>
                </select>
              <div className="btn-flex">
                <button onClick={closeModal} className="btn-submit" style={{backgroundColor: 'transparent', border: '1px solid silver', color: 'rgb(12, 72, 122)'}}>
                  Reset
                </button>
                <button type="submit" className="btn-submit">Submit</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      )}

      <table ref={tableRef} className="user-table">
        <thead>
          <tr>
            <th>
              <span
              className="fa fa-plus fa-fade fa-beat"
              style={{ float: 'left', width: '10%', cursor: 'pointer', fontSize: '20px'}}
              onClick={openModal}
            >
              
            </span>&nbsp; Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
               <DropDown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="user-table-pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &larr;
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default UserTable;