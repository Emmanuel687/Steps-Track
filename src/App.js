import { Children, useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in Content</p>
        <div className="buttons">
          <Button
            bgColor="#e7e7e7"
            textcolor="#333"
            onClick={() => alert(`Learn how to ${messages}`)}
          >
            Learn How
          </Button>
        </div>
      </StepMessage>

      <StepMessage step={2}>
        <p>Read Children</p>
        <div className="buttons">
          <Button
            bgColor="#e6e6e6"
            textcolor="#333"
            onClick={() => alert(`Learn how to ${messages}`)}
          >
            Create
          </Button>
        </div>
      </StepMessage>

      {/* <Steps /> */}
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleClose = () => {
    setIsOpen((is) => !is);
  };
  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      <div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <StepMessage step={step}></StepMessage>

            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                {" "}
                Previous <span>👈</span>
              </Button>

              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                {" "}
                Next <span>👉</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>
        Step {step}:{messages[step - 1]}
      </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {" "}
      {children}
    </button>
  );
}
