import React, { useState, useRef, useEffect } from "react";
// import "./styles.css";
import { FiPlus } from "react-icons/fi";
import Link from 'next/link'

export default function FAQ2() {
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
                How many different types of transactions are there? What are those?
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
                  There are about 10 types of transaction on Theta Network:
                <br/>
                <br/>
                1: coinbase transaction, for validator/guardian reward
                <br/>
                2: slash transaction, for slashing malicious actors
                <br/>
                3: send transaction, for sending tokens among accounts
                <br/>
                4: reserve fund transaction, for off-chain micropayment
                <br/>
                5: release fund transaction, for off-chain micropayment
                <br/>
                6: service payment transaction, for off-chain micropayment
                <br/>
                7: split rule transaction, for the "split rule" special smart contract
                <br/>
                8: smart contract transaction, for general purpose smart contract
                <br/>
                9: deposit stake transaction, for depositing stake to validators/guardians
                <br/>
                10: withdraw stake transaction, for withdrawing stake from validators/guardians
                <br/>
                <br/>
                For more information visit-
                <span>
                  <u>
                <Link href="https://docs.thetatoken.org/docs/explorer-api-reference#getblock" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                  Transaction Types
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
