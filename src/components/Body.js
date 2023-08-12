import React from "react";
import PaymentCard from "../components/PaymentCard";
import Taglines from "./Taglines";
import "../styles/body.css";

export default function Body() {
  return (
    <>
      <div className="body-container-image">
        <div className="body-container">
          <div className="left-body">
            <Taglines />
          </div>
          <div className="right-body">
            <PaymentCard />
          </div>
        </div>
      </div>
    </>
  );
}
