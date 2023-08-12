import React, { useState } from 'react'
import "../styles/paymentcard.css";
import Offer from './Offer';
import SpecialOffer from './SpecialOffer';
import razorpay_icon  from '../assets/razorpay_icon.png';
import {data, fixedPrice } from '../constans/data.js';
import { getFormatedAmount, getGSTprice } from '../utils/helpers';
import { fixedPrice } from '../constans/data.js';

export default function PaymentCard() {

  const [selectedFees, setSelectedFess] = useState(179);
  const [selectedOffer, setSelectedOffer] = useState(2);

  const totalFees = selectedFees + getGSTprice(selectedFees);
  const formatedFixedPrice = getFormatedAmount(fixedPrice);

  function clickhandler (val,id){
    setSelectedFess(val);
    setSelectedOffer(id);
  }

  return (
    <>
      <div className="card">
        <div className="progress-bar">
          <div className="pages">
            <div className="box">1</div>
            <p className="box-text">Sign up</p>
          </div>
          <div className="pages">
            <div className="box">2</div>
            <p className="box-text">Subscribe</p>
          </div>
        </div>

        <h2 className="plan-heading">Select your subcription plan</h2>

        {
          data.map((singleOffer) => {
            return (
              <Offer key={singleOffer.id} offerDetails={...singleOffer} clickhandler={clickhandler} isSelected={selectedOffer===singleOffer.id}/>
            )
          })
        }

        <hr />
        <div className="plan-summery">
          <div className="flex-box">
            <p>Subscription Fee</p>
            <p>{formatedFixedPrice}</p>
          </div>

          <SpecialOffer feesSelected={selectedFees}/>

          <div className="flex-box">
            <p>
              <span style={{ fontWeight: "700" }}>Total </span> (Incl. of 18%
              GST)
            </p>
            <h2 style={{ fontSize: "18px" }}>₹{totalFees}</h2>
          </div>
        </div>
        <div className="button-bar">
          <div className="button-cancel">
            <h4>CANCEL</h4>
          </div>
          <div className="button-pay">
            <h4>PROCEED TO PAY</h4>
          </div>
        </div>
        <div className="razor-box">
          <img
            className="razorpay-icon"
            src={razorpay_icon}
            alt="razorpay-icon"
          />
        </div>
      </div>
    </>
  );
}
