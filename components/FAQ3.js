import React, { useState, useRef, useEffect } from "react";
// import "./styles.css";
import { FiPlus } from "react-icons/fi";
import Link from 'next/link'
export default function FAQ3() {
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
                  What is the source of this data?
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p style={{"color":"white","fontSize":"17px"}}>
                The "Theta Network" team's official API is being used to retrieve this data.
                <br/>
                This is a hyperlink to the API's documentation-
                <span>
                  <u>
                <Link href="https://docs.thetatoken.org/docs/explorer-api-reference#getaccounttxhistory" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                  GetAccountTxHistory
                  </a>
                </Link>
                </u>
                </span>
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
