import React from "react";

import "./styles.css";

import whatsappicon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/4096456?s=400&v=4"
          alt="marcobrunodev"
        />
        <div>
          <strong>Marco Bruno</strong>
          <span>ReactJS</span>
        </div>
      </header>
      <p>
        Descrição
        <br />
        <br />
        Descrição
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappicon} alt="whatsapp" />
          fazer contato.
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
