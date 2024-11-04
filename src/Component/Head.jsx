import React from 'react'
import image from '../assets/admin-icn.png'

const Head = () => {
  return (
    <header>
        <div className="main-header">
            <div className="brand-search">
              <div className="brnd">
                <h2>&copy;lendsqr</h2>
              </div>
              <div className="search">
                <input type="search" name="" id="" placeholder='&nbsp;&nbsp; Search for anything' />
                <span><i className='fa fa-search'></i></span>
              </div>
              <div className="profile">
                <div className="main-profile">
                  <div className='docs'>
                    <p>Docs</p>
                   <span><i class="fa-regular fa-bell fa-shake"></i></span>
                  </div>
                  <div className='img-name'>
                    <img src={image} />
                    <div className="us">
                      <span>Adedeji</span>
                      <span>(Admin)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Head
