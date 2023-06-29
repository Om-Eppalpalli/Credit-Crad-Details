import React, { useState } from 'react';
import './CreditCard.css';

const CreditCard = ({ frontSideProps, backSideProps }) => {
  return (
    <div className="credit-card">
      <div className="front">
        <div className="card-number">
          <span className="label"></span> {frontSideProps.cardNumber}
        </div>
        <div id="card_holder_exp">
          <div className="card-holder">
            <span className="label"></span> {frontSideProps.cardHolderName}
          </div>
          <div className="expiry">
            <span className="label"></span> {frontSideProps.expiryMonth}/{frontSideProps.expiryYear}
          </div>
        </div>
      </div>
      <div className="back">
        <div className='black_strip'></div>
        <div className="cvc">
          <span className="label"></span> {backSideProps.cvc}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
