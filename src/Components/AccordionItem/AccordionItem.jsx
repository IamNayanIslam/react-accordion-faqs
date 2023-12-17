import React from "react";

export default function AccordionItem({ faq }) {
  return (
    <>
      <div className="item">
        <p className="number">0{faq.id}</p>
        <p className="text">{faq.title}</p>
        <p className="icon">-</p>
        <div className="content-box">{faq.description}</div>
      </div>
    </>
  );
}
