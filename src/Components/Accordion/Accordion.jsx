import AccordionItem from "../AccordionItem/AccordionItem";
import "./Accordion.css";

const faqs = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Why do we use it?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Where does it come from?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    title: "Is it used in the industry?",
    description:
      "Yes, Lorem Ipsum is widely used in the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "Can I generate Lorem Ipsum?",
    description: "Yes, there are many online Lorem Ipsum generators available.",
  },
  {
    id: 6,
    title: "Is Lorem Ipsum readable?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default function Accordion() {
  return (
    <>
      <div className="accordion">
        <h1>Frequently Asked Questions!</h1>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} faq={faq} />
        ))}
      </div>
    </>
  );
}
