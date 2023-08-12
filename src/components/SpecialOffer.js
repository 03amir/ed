import React from 'react';
import offer_timer from '../assets/offer_timer.png';
import "../styles/specialoffer.css";
import { fixedPrice } from '../constans/data';
import { getFormatedAmount } from '../utils/helpers';

export default function SpecialOffer({feesSelected}) {

  const totalOffer = getFormatedAmount(fixedPrice - feesSelected);

  return (
    <>
      <div className="special-box">
        <div className="flex-box-special">
          <h4>Limited time offer</h4>
          <p style={{ color: "black" }}>- {totalOffer}</p>
        </div>
        <div className="flex-start">
          <img src={offer_timer} alt="offer-timer-icon" />
          <p style={{ fontSize:'10px' }}>Offer valid till 25th March 2023 </p>
        </div>
      </div>
    </>
  );
}
