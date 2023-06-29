import React, { useState } from 'react';
import './CardDetailsForm.css';
import CreditCard from './CreditCard';

const CardDetailsForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'expiryMonth') {
      if(value.length <= 2)
      {
        setExpiryMonth(value);
      }
    } else if (name === 'expiryYear') {
      if(value.length <= 2)
      {
        setExpiryYear(value);
      }
    } else if (name === 'cvc') {
      if (value.length <= 3) {
        setCVC(value);
      }
    } else if (name === 'cardHolderName') {
      setCardHolderName(value);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (cardNumber.trim() === '') {
      newErrors.cardNumber = 'Card number is required';
      valid = false;
    } else if (!/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number';
      valid = false;
    }

    if (cvc.trim() === '') {
      newErrors.cvc = 'CVC is required';
      valid = false;
    } else if (!/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = 'Invalid CVC';
      valid = false;
    }

    if (cardHolderName.trim() === '') {
      newErrors.cardHolderName = 'Card holder name is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log('Card Number:', cardNumber);
      console.log('Expiry Month:', expiryMonth);
      console.log('Expiry Year:', expiryYear);
      console.log('CVC:', cvc);
      console.log('Card Holder Name:', cardHolderName);
    }
  };

  return (
    <div className="card-details-form">
      <h1>Card Details Form</h1>
      <div className="container">
        <div id="right_container">
          <form onSubmit={handleSubmit}>
            <div id="form_div">
              <div className="div_flex">
                <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
                <div>
                  <input
                    type="text"
                    id="cardHolderName"
                    name="cardHolderName"
                    value={cardHolderName}
                    placeholder="e.g. Virat Kohli"
                    maxLength={50}
                    onChange={handleInputChange}
                  />
                  <div>{errors.cardHolderName && <span className="error">{errors.cardHolderName}</span>}</div>
                </div>
              </div>
              <div className="div_flex">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <div>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    placeholder="e.g. 1234 5678 9123 0000"
                    maxLength={19}
                    onChange={handleInputChange}
                  />
                  <div>{errors.cardNumber && <span className="error">{errors.cardNumber}</span>}</div>
                </div>
              </div>
              <div id="exp_cvc">
                <div className="div_flex">
                  <label htmlFor="expiryDate">EXP. DATE (MM/YY)</label>
                  <div id="flex_mon_year">
                    <div id="div_month">
                      <input
                        type="number"
                        className="expiryDateClass"
                        id="expiryMonth"
                        name="expiryMonth"
                        value={expiryMonth}
                        placeholder="MM"
                        maxLength={2}
                        onChange={handleInputChange}
                      />
                      <div>{errors.expiryMonth && <span className="error">{errors.expiryMonth}</span>}</div>
                    </div>
                    <div id="div_year">
                      <input
                        type="number"
                        className="expiryDateClass"
                        id="expiryYear"
                        name="expiryYear"
                        value={expiryYear}
                        placeholder="YY"
                        maxLength={2}
                        onChange={handleInputChange}
                      />
                      <div>{errors.expiryYear && <span className="error">{errors.expiryYear}</span>}</div>
                    </div>
                  </div>
                </div>
                <div className="div_flex" id="id_cvc">
                  <label htmlFor="cvc">CVC</label>
                  <div>
                    <input
                      type="number"
                      id="cvc"
                      name="cvc"
                      value={cvc}
                      placeholder="e.g. 123"
                      maxLength={3}
                      onChange={handleInputChange}
                    />
                    <div>{errors.cvc && <span className="error">{errors.cvc}</span>}</div>
                  </div>
                </div>
              </div>
              <button type="submit" id="submit_button">
                Confirm
              </button>
            </div>
          </form>
        </div>
        <div id="wrap_left">
          <div id="back_color"></div>
          <div id="left_container">
            <CreditCard
              frontSideProps={{
                cardNumber: cardNumber,
                cardHolderName: cardHolderName,
                expiryMonth: expiryMonth,
                expiryYear: expiryYear,
              }}
              backSideProps={{
                cvc: cvc,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsForm;
