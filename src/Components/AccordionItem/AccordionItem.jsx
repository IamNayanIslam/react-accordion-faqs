import { useState } from "react";

export default function AccordionItem({ faq, toggleIsOpen, onOpen, curOpen }) {
  const isOpen = faq.id === curOpen;

  function toggleIsOpen() {
    onOpen(faq.id);
  }

  return (
    <>
      <div className={`item ${isOpen && "open"}`} onClick={toggleIsOpen}>
        <p className="number">{faq.id < 10 ? `0${faq.id}` : faq.id}</p>
        <p className="text">{faq.title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{faq.description}</div>}
      </div>
    </>
  );
}
