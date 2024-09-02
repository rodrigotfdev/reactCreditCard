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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field) => (e) => {
    let value = e.target.value;

    if (field === "cardNumber") {
      // Remove any non-digit characters
      value = value.replace(/\D/g, "");

      // Limit to 16 digits
      if (value.length > 16) {
        value = value.slice(0, 16);
      }

      // Format the card number with spaces every 4 digits
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    setCardDetails({ ...cardDetails, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setCardDetails({
      cardName: "John AppleSeed",
      cardNumber: "0000 0000 0000 0000",
      expMonth: "12",
      expYear: "25",
      cvcInfo: "123",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="app flex h-screen">
      <LeftSideSection {...cardDetails} />
      {isSubmitted ? (
        <ThankYouMessage handleReset={handleReset} />
      ) : (
        <RightSideSection
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

function LeftSideSection({ cardName, cardNumber, expMonth, expYear, cvcInfo }) {
  return (
    <div className="left-side-section  bg-center bg-cover te w-[30%] bg-bgLeft">
      <img
        src="/img/bg-card-front.png"
        alt="Card Front"
        className="card-front absolute top-28 left-48"
      />
      <img
        src="/img/bg-card-back.png"
        alt="Card Back"
        className="card-back absolute top-96 left-72"
      />
      <p className="showCardNumber text-white text-3xl absolute top-[270px] left-[220px] w-full">
        {cardNumber}
      </p>
      <p className="showCardName text-white absolute top-[315px] left-[220px] text-md w-full">
        {cardName}
      </p>
      <p className="showExpDate text-white text-md absolute top-[315px] left-[489px] w-full">
        {expMonth} / {expYear}
      </p>
      <p className="showCvc text-xl absolute top-[490px] left-[650px]">
        {cvcInfo}
      </p>
    </div>
  );
}

function RightSideSection({ handleInputChange, handleSubmit }) {
  return (
    <div className="right-side-section  flex-col items-center justify-center tr flex w-[70%] ">
      <form className="form-section w-[40%] h-[50%]" onSubmit={handleSubmit}>
        <div className="card-primary flex flex-col">
          <label htmlFor="cardName" className="my-2">
            CardHolder Name
          </label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            placeholder="e.g. Jane Appleseed"
            onChange={handleInputChange("cardName")}
            className="h-[40px] border-2 rounded-md  border-purple-500 box-border text-center"
          />
          <label htmlFor="cardNumber" className="mb-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            maxLength={19}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleInputChange("cardNumber")}
            className="h-[30px]  mb-2 rounded-md border-2 border-purple-500 text-center"
          />
        </div>
        <div className="card-secondary flex">
          <div className="flex flex-col  justify-center w-[50%]">
            <label className="expMonth ">Exp. Date (MM/YY)</label>
            <div className="flex flex-row">
              <input
                type="text"
                name="expMonth"
                id="expMonth"
                maxLength={2}
                placeholder="MM"
                onChange={handleInputChange("expMonth")}
                className="h-[30px] w-[50%] rounded-md border-2 border-purple-500 text-center"
              />
              <input
                type="text"
                name="expYear"
                id="expYear"
                maxLength={2}
                placeholder="YY"
                onChange={handleInputChange("expYear")}
                className="h-[30px] w-[50%] mx-4 rounded-md text-center border-2 border-purple-500"
              />
            </div>
          </div>

          <div className="flex flex-col  w-[50%] ">
            <label htmlFor="CVC">CVC</label>
            <input
              type="text"
              name="CVC"
              id="CVC"
              maxLength={3}
              placeholder="CVC"
              onChange={handleInputChange("cvcInfo")}
              className="h-[30px] w-20 text-center rounded-md border-2 border-purple-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-confirm w-full bg-purple-500 my-4 rounded-md h-8 text-white font-extrabold uppercase"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

function ThankYouMessage({ handleReset }) {
  return (
    <div className="thank-you-message flex items-center justify-center w-full h-full flex-col">
      <img src="/img/icon-complete.svg" alt="Complete Icon" className="my-8" />
      <h1 className="text-3xl font-bold text-purple-500 mb-8">Thank you!</h1>
      <p>We've added your Card details</p>
      <button
        className="btn-confirm w-96 bg-purple-500 my-4 rounded-md h-8 text-white font-extrabold uppercase"
        onClick={handleReset}
      >
        Continue
      </button>
    </div>
  );
}
