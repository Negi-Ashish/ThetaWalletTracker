import React, { useState, useRef, useEffect } from "react";
// import "./styles.css";
import { FiPlus } from "react-icons/fi";

export default function FAQ5() {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion1 = () => {
    setActive(!active);
  };

  

  return (
    <>
      <div className="FAQ">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                What was the driving force for developing this online web application?                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p style={{"color":"white","fontSize":"17px"}}>
                We created this web app for a variety of reasons.
                <br/>
                The main goal is to draw attention to Theta Network Blockchain and demonstrate to everyone that we are here to grow and develop.
                <br/>
                This web application is also intended to explore and investigate the blockchain's transparency.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
