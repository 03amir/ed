import React from 'react';
import "../styles/offer.css";

export default function Offer  ({ offerDetails, clickhandler , isSelected }){

  const {id,price,monthlyPrice,months,status} = offerDetails;

  const getCssClass = () => {
    if (isSelected) {
      return 'selected-class';
    } else if (status === 'expired') {
      return 'expired-class';
    } else {
      return 'default-class';
    }
  };

  return (
    <>
      <div className={`offer-box ${status=="expired" ?"expired-offer-box":""} ${isSelected?"selected-offer-box":" "}`} onClick={() => { clickhandler(price,id)}}>

        {status && <div className={status=="expired"?"expired-offer":"recomended-offer"}>{status}</div>}

        <div className="left-offer">

        {/* radio button */}
        <div className={getCssClass()}>
          { status=="expired" && <div className='inner-circle'> </div>}
        </div>

          <h3 className="offer-text">{months} Months Subscription </h3>
        </div>

        <div className="money-box">
          <h3 className="total-money">
        
            <span className="money-span">Total </span>₹{price}
          </h3>
          <p className="month-money">
          
            <span className="money-span-month">₹{monthlyPrice}</span>/mo
          </p>
        </div>
      </div>
    </>
  );
}

