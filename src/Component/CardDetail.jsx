import React from 'react'
import '../assets/css/CardDetail.css';
import { Link } from 'react-router-dom';
import Br from './Br';
import MenuDropDown from './MenuDropDown';

const CardDetail = () => {

  return (
    <div className="main-cards-datails main-cards">
        <br /><br /><br />
      <div className="back-link">
        <div className="back">
          <Link className='back' to={'/dash'}>&nbsp;&nbsp;&nbsp; &larr; Back to Users</Link><br /><br />
          <h4>User Details </h4>
        </div>
        <div className="backlist">
            <Link className='b-u'>BLACKLIST USER</Link>
            <Link className='a-u'>ACTIVATE USER</Link>
        </div>
      </div>
      <div className="br-spacing">
        <br /><br />
      </div>
      <div className="cards-wrapper cards-wrapper-datails">
        <div className="all-cards all-cards-datails">
            <div className="carddd">
              <div className="user-profile">
                <div className="logo-name">
                  <div className='user-icon'>
                    <span className='fa-solid fa-user'></span>
                  </div>
                  <div className='username'>
                    <p className='name'>Grace Effiom</p>
                    <p>LSQFf587G90</p>
                  </div>
                </div>
                <div className="u-t">
                  <p>User's Tier</p>
                  <div className="star-icon">
                    <div className='fa fa-star'></div>
                    <div className='fa fa-star'></div>
                    <div className='fa fa-star'></div>
                  </div>
                </div>
                <div className="balance">
                  <p><i className='fa-solid fa-naira-sign'></i> 200,000.00</p>
                  <div className="bank">
                    9912345678/Previdus Bank
                  </div>
                </div>
              <div className="menu-open">
                <MenuDropDown />
              </div>
              </div>
              <div className="menu">
                <Link className='active'>General Details</Link>
                <Link>Documents</Link>
                <Link>Bank Details</Link>
                <Link>Loans</Link>
                <Link>Savings</Link>
                <Link>App and System</Link>
              </div>
            </div>
        </div>
      </div>
      <div className="br-spacing">
        <br /><br /><br /><br /><br />
      </div>
      <Br />
      <div className="details-body">
        <div className="user-details-id">
          <p><b>Personal Information</b></p>
          <div className="user-id">
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>FIRSTNAME</p>
                <p>Grace Effiom</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>PHONE NUMBER</p>
                <p>070289189</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>EMAIL ADDRESS</p>
                <p>lendsqr@gmail.com</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>BVN</p>
                <p>444002245</p>
              </div>
            </div>
            
          </div>
          <div className="cont user-id">

            <div className="personal">
                <div style={{
                  lineHeight: '.5'
                }}>
                  <p className='grey'>GRNDER</p>
                  <p>Female</p>
                </div>
              </div>

            <div className="personal">
                <div style={{
                  lineHeight: '.5'
                }}>
                  <p className='grey'>MARITAL STATUS</p>
                  <p>Single</p>
                </div>
              </div>

              <div className="personal">
                <div style={{
                  lineHeight: '.5'
                }}>
                  <p className='grey'>CHILDREN</p>
                  <p>none</p>
                </div>
              </div>

              <div className="personal">
                <div style={{
                  lineHeight: '.5'
                }}>
                  <p className='grey'>TYPE OF RESIDENCE</p>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="user-details-id">
          <p><b>Socials</b></p>
          <div className="user-id">
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>Twitter</p>
                <p>@grace_effiom</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>FACEBOOK</p>
                <p>Grace Effiom</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>INSTAGRAM</p>
                <p>@grace_effiom</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="user-details-id" style={{
          height: '15vh',
          border: 'none'
        }}>
          <p><b>EDUCATION AND EMPLOYEMENT</b></p>
          <div className="user-id">
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>LEVEL OF EDUCATION</p>
                <p>B.Sc</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>EMPLOYEMENT STATUS</p>
                <p>Employed</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>SECTOR OF EMPLOYEMENT</p>
                <p>FinTech</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>DURATION OF EMPLOYMENT</p>
                <p>2 years</p>
              </div>
            </div>

              

          </div>
        </div>
            <div className="user-details-id" style={{
          height: '12vh',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px'
        }}>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>OFFICE EMAIL</p>
                <p>grace@gmail.com</p>
              </div>
            </div>

          <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>MONTHLY INCOME</p>
                <p><i className='fa fa-naira-sign'></i> 200,000.00 - <i className='fa fa-naira-sign'></i> 400,000.00</p>
              </div>
            </div>

            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>LOAN REPAYMENT</p>
                <p>40,000</p>
              </div>
            </div>
            </div>

        <div className="user-details-id" style={{
          height: '11vh'
        }}>
          <p><b>Guarantor</b></p>
          <div className="user-id">
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>FULL NAME</p>
                <p>Debbi ogana</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>EMAIL ADDRESS</p>
                <p>debby@gmail.com</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="user-details-id" style={{
          height: '9vh',
          border: 'none',
          padding: '5px'
        }}>
          <div className="user-id">
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>FULL NAME</p>
                <p>Debbi ogana</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>PHONE NUMBER</p>
                <p>07060780922</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>EMAIL ADDRESS</p>
                <p>debby@gmail.com</p>
              </div>
            </div>
            <div className="personal">
              <div style={{
                lineHeight: '.5'
              }}>
                <p className='grey'>RELATIONSHIP</p>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardDetail

