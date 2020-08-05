import React from "react";

import "./styles.css";

import whatsappicon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  id: number;
  subject: string;
  name: string;
  cost: number;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { subject, name, cost, avatar, whatsapp, bio } = teacher;

  function createNewConnection() {

    api.post('connections', {user_id: teacher.id})
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={createNewConnection} href={`https://wa.me/${whatsapp}`}>
          <img src={whatsappicon} alt="whatsapp" />
          fazer contato.
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
