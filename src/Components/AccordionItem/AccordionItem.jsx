import React, { useState } from "react";

export default function AccordionItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={`item ${isOpen ? "open" : ""}`}>
        <p className="number">{faq.id < 10 ? `0${faq.id}` : faq.id}</p>
        <p className="text">{faq.title}</p>
        <p className="icon" onClick={toggleIsOpen}>
          {isOpen ? "-" : "+"}
        </p>
        {isOpen && <div className="content-box">{faq.description}</div>}
      </div>
    </>
  );
}
