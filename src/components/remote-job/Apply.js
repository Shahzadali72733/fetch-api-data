import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Buttons from './Buttons';
import './css/style-job-portal.css';
import Header from './header';
import Footer from './footer';

const messages = [
    [
      { label: "First Name", inputType: "text", name: "firstName" },
      { label: "Last Name", inputType: "text", name: "lastName" }
    ],
    { label: "Enter Your Email", inputType: "email", name: "email" },
    { label: "Enter Your Age", inputType: "number", name: "Location" },
    { label: "Enter Your Age", inputType: "file", name: "Select Your CV" }
  ];

function Apply() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [warningMessage, setWarningMessage] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const Stepdec = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            setWarningMessage("Step cannot be less than 1");
            alert(warningMessage);
        }
    };

    const Stepinc = () => {
        if (step < messages.length) {
            setStep(step + 1);
        } else {
            setWarningMessage("Limit reached");
            alert(warningMessage);
        }
    };

    const Submitted = () => {
        const confirm = window.confirm("Are you sure you want to submit the form?");
        if (confirm === true) {
            setIsSubmitted(true);
            console.log("Form submitted:", formData);
        } else {
            setIsOpen(true);
        }
    };

    const handleHomeClick = () => {
        setIsSubmitted(false);
        setIsOpen(true);
        setStep(1);
        setFormData({});
    };

    return (
        <div>
          <Header />
          {isSubmitted ? (
            <div className='steps form-message'>
              <h1>Your form was submitted successfully!</h1>
              <button onClick={handleHomeClick} className="btn btn-primary">
                Start New Application
              </button>
            </div>
          ) : (
            isOpen && (
              <div className='steps'>
                <div>
                  <h1>Join Our Team</h1>
                  <p>Perform 4 Steps to Apply</p>
                </div>
                
                {/* Step indicators */}
                <div className={`numbers step-line step-${step}`}>
                  {[...Array(messages.length)].map((_, i) => (
                    <div key={i} className={step >= i + 1 ? "active" : ""}>
                      {i + 1}
                    </div>
                  ))}
                </div>
    
              
                <div className="message">
                  {Array.isArray(messages[step - 1]) ? (
                    messages[step - 1].map((field, index) => (
                      <div key={index} className="mb-3">
                        <label className="form-label">{field.label}</label>
                        <input
                          type={field.inputType}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="mb-3">
                      <label className="form-label">{messages[step - 1].label}</label>
                      <input
                        type={messages[step - 1].inputType}
                        name={messages[step - 1].name}
                        value={formData[messages[step - 1].name] || ""}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>
    
                <Buttons 
                  Stepdec={Stepdec} 
                  Stepinc={Stepinc} 
                  Submitted={Submitted} 
                  step={step} 
                  totalSteps={messages.length} 
                />
              </div>
            )
          )}
          <Footer />
        </div>
      );
    }

export default Apply;