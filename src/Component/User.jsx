import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import CardDetail from './CardDetail';

const User = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="nav-body">
      <button className="toggle-btn" onClick={toggleNav} style={{
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        padding: '5px',
        position: 'absolute',
        top: '4rem'
    }}>
        <i className="fa fa-bars"></i>
      </button>
      <nav className={`sidebar ${isNavOpen ? 'open' : ''}`}>
      <br /><br /><br />
        <ul>
          <div className="nav-head">
            <span className='fa-kit'><i class="fa fa-kit name fa-solid fa-briefcase"></i> Switch Organization</span>
            <span className="times" onClick={toggleNav}>&times;</span>
          </div>
          <Link><i className="fa-solid fa-house-chimney-window"></i> Dashboard</Link>
        </ul>
        <ul>
              <div className='name'>CUSTOMERS</div>
              <Link className='active-nav'><i className='fa-solid fa-user-group'></i> Users</Link>
              <Link><i className='fa-solid fa-users'></i> Guarantor</Link>
              <Link><i className="fa-solid fa-sack-dollar"></i> Loans</Link>
              <Link><i className='fa-regular fa-handshake'></i> Decision Models</Link>
              <Link><i className="fa-solid fa-piggy-bank"></i> Savings</Link>
              <Link><i className="fa-solid fa-hand-holding-dollar"></i> Loan Requests</Link>
              <Link><i className="fa-solid fa-user-check"></i> Whitelist</Link>
              <Link><i className="fa-solid fa-user-xmark"></i> Karma</Link>
              <div className='name'>BUSINESSES</div>
              <Link><i className="fa fa-kit name fa-solid fa-briefcase"></i> Organization</Link>
              <Link><i className='fa-solid fa-hand-holding-dollar'></i> Loan Product</Link>
              <Link><i className='fa-solid fa-piggy-bank'></i> Savings Product</Link>
              <Link><i className='fa-solid fa-piggy-bank'></i> Transactions</Link>
              <Link><i className='fa-regular fa-handshake'></i> Fee and charges</Link>
              <Link><i className="fa-brands fa-slack"></i> Services</Link>
              <Link><i className="fa-solid fa-user-gear"></i> Service Account</Link>
              <Link><i className='fa-solid fa-users'></i> Settlements</Link>
              <div className='name'>SETTINGS</div>
              <Link><i className="fa-solid fa-sliders"></i> References</Link>
              <Link><i className='fa-solid fa-users'></i> Fee and Pricing</Link>
              <Link><i className='fa-solid fa-coins'></i> Fee and charges</Link>
              <Link><i className="fa-regular fa-font-awesome"></i> System Messages</Link>
              <Link><i className="fa fa-sign-out"></i> Logout</Link>
          </ul>
      </nav>
      <main>
        <div className="card-body">
          <CardDetail />
        </div>
        <div className="table">
        </div>
      </main>
    </div>
      );
}

export default User
