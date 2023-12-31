import { useState } from "react";

export default function AccordionItem({
  faq,
  toggleIsOpen,
  onOpen,
  curOpen,
  children,
}) {
  const isOpen = faq.id === curOpen;

  function toggleIsOpen() {
    onOpen(isOpen ? null : faq.id);
  }

  return (
    <>
      <div className={`item ${isOpen && "open"}`} onClick={toggleIsOpen}>
        <p className="number">{faq.id < 10 ? `0${faq.id}` : faq.id}</p>
        <p className="text">{faq.title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{children}</div>}
      </div>
    </>
  );
}
