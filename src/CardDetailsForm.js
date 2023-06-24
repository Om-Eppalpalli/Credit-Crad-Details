import React, { useState } from 'react';
import './CardDetailsForm.css';

const CardDetailsForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
    } else if (name === 'cvc') {
      setCVC(value);
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
    } else if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
      valid = false;
    }

    if (expiryDate.trim() === '') {
      newErrors.expiryDate = 'Expiry date is required';
      valid = false;
    } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date';
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
      // Perform form submission logic here
      // For now, we'll just log the form data
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', expiryDate);
      console.log('CVC:', cvc);
      console.log('Card Holder Name:', cardHolderName);
    }
  };

  return (
    <div className="card-details-form">
      <h1>Card Details Form</h1>
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
              <div>
                {errors.cardHolderName && <span className="error">{errors.cardHolderName}</span>}
              </div>
            </div>
          </div>
          <div className="div_flex">
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <div>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={16}
                onChange={handleInputChange}
              />
              <div>
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>
            </div>
          </div>
          <div id="exp_cvc">
            <div className="div_flex">
              <label htmlFor="expiryDate">EXP. DATE (MM/YY)</label>
              <div>
                <input
                  type="number"
                  className="expiryDateClass"
                  id="expiryDate"
                  name="expiryDate"
                  value={expiryDate}
                  placeholder="MM"
                  maxLength={2}
                  onChange={handleInputChange}
                />
                <input type="number" className="expiryDateClass" placeholder="YY" maxLength={2}/>
                <div>
                  {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
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
                <div>
                  {errors.cvc && <span className="error">{errors.cvc}</span>}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" id="submit_button">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CardDetailsForm;
