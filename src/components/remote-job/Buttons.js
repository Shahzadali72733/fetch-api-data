import React from 'react';

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Buttons({ Stepdec, Stepinc, Submitted, step }) {
  return (
    <div className='buttons'>
      <Button bgColor="#0d6efd" textColor="white" onClick={Stepdec}>
         Previous
      </Button>
      <Button bgColor="#0d6efd" textColor="white" onClick={Stepinc}>
        Next 
      </Button>
      <button
        onClick={Submitted}
        className={step === 4 ? "active" : ""}
        style={{
          backgroundColor: step === 4 ? "green" : "grey",
          color: "white",
          cursor: step === 4 ? "pointer" : "not-allowed"
        }}
        disabled={step !== 4}
      >
        Submit
      </button>
    </div>
  );
}

export default Buttons;
