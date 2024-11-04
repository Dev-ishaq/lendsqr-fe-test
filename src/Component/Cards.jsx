import React from 'react';
import '../assets/css/Cards.css';

const Cards = () => {
  const cardsData = [
    { icon: <i className='fa fa-users fa-fade fa-beat' style={{padding: '7px', backgroundColor: 'rgba(255, 192, 203, 0.234)', borderRadius: '50%', fontSize: '16px'}}></i>, title: 'USERS', count: '2,453' },
    { icon: <i className='fa-regular fa-user fa-fade fa-beat' style={{padding: '7px', backgroundColor: 'rgba(30, 143, 255, 0.222)', borderRadius: '50%', fontSize: '16px'}}></i>, title: 'ACTIVE USERS', count: '2,450' },
    { icon: <i className='fa fa-save fa-fade fa-beat' style={{padding: '7px', backgroundColor: 'rgba(30, 255, 244, 0.228)', borderRadius: '50%', fontSize: '16px'}}></i>, title: 'USERS WITH LOANS', count: '12,453' },
    { icon: <i className='fa fa-user fa-fade fa-beat' style={{padding: '7px', backgroundColor: 'rgba(255, 217, 0, 0.211)', borderRadius: '50%', fontSize: '16px'}}></i>, title: 'USERS WITH SAVINGS', count: '102,453' },
  ];

  return (
    <div className="main-cards">
      <div className="cards-wrapper">
        <div className="all-cards">
          {cardsData.map((card, index) => (
            <div key={index} className="cardd">
              <div className="card-icon">{card.icon}</div>
              <p className="card-title">{card.title}</p>
              <p className="card-count">{card.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
