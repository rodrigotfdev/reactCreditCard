import React from "react";
import { useState } from "react";

export default function App() {
  const [cardDetails, setCardDetails] = useState({
    cardName: "John AppleSeed",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "12",
    expYear: "25",
    cvcInfo: "123",
  });
  return (
    <div className="container flex">
      <LeftSideSection {...cardDetails} />
      <RightSideSection />
    </div>
  );
}

function LeftSideSection({ cardName, cardNumber, expMonth, expYear, cvcInfo }) {
  return (
    <div className="left-side-section bg-bgLeft bg-center bg-cover h-screen absolute">
      <img
        src="/img/bg-card-front.png"
        alt="Card Front"
        className="card-front relative top-28 left-48"
      />
      <img
        src="/img/bg-card-back.png"
        alt="Card Back"
        className="card-back absolute top-96 left-72"
      />
      <p className="showCardNumber text-white text-3xl absolute top-[250px] left-[240px] w-full">
        {cardNumber}
      </p>
      <p className="showCardName text-white absolute top-[300px] left-[240px] text-xl">
        {cardName}
      </p>
      <p className="showExpDate text-white text-xl absolute top-[300px] left-[510px] w-full">
        {expMonth} / {expYear}
      </p>
      <p className="showCvc text-xl absolute top-[490px] left-[650px]">{cvcInfo}</p>
    </div>
  );
}

function RightSideSection() {
  return <div className="right-side-section"></div>;
}
