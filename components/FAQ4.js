import React, { useState, useRef, useEffect } from "react";
// import "./styles.css";
import { FiPlus } from "react-icons/fi";

export default function FAQ4() {
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
                How can the legitimacy of a transaction be checked?</h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p style={{"color":"white","fontSize":"17px"}}>
                The view cell of the View Transaction column is always clickable.
                You can check on Thete Explorer right away by clicking this link.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}