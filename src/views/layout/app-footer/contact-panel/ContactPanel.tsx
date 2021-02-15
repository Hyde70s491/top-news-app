import React from "react";

import "./ContactPanel.scss";

const ContactPanel: React.FC = () => {
  return (
    <div className="contact-panel">
      <span className="contact-panel__label">Contact</span>
      <div className="contact-panel__emails">
        <a
          className="contact-panel__emails__entity"
          href="mailto:stefan.misic.491@gmail.com"
        >
          stefan.misic.491@gmail.com
        </a>
        <a className="contact-panel__emails__entity" href="mailto:nastijak97">
          nastijak97@gmail.com
        </a>
      </div>

      <div className="contact-panel__separator"></div>

      <span className="contact-panel__label">Follow Us</span>
      <a
        className="contact-panel__link"
        href="https://www.linkedin.com/in/stefan-mi%C5%A1i%C4%87-03335413a/"
      >
        <img
          className="contact-panel__link__image"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="developer"
        />
      </a>
      <a
        className="contact-panel__link"
        href="https://www.linkedin.com/in/anastasia-klokova-3b8048151/"
      >
        <img
          className="contact-panel__link__image"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="designer"
        />
      </a>
    </div>
  );
};

export default ContactPanel;
