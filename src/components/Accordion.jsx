import { useState } from "react";

const Accordion = ({ Values }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true); // Enregistre que l'utilisateur a interagi
  };

  return (
    <div className="accordion">
      <div className="header-accordion">
        <h2 className="title-accordion">{Values.title}</h2>
        <i
          className={`fa-solid fa-chevron-up ${hasInteracted ? (isOpen ? 'rotate-down' : 'rotate-up') : ''}`}
          onClick={toggleDropDown}
        ></i>
      </div>
      <div className={`${hasInteracted ? (isOpen ? 'opendiv' : 'closediv') : 'initial'}`}>
        <p className="content-accordion">{Values.content}</p>
      </div>
    </div>
  );
};

export default Accordion;
