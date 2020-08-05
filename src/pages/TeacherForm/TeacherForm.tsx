import React from 'react'
import {PageHeader} from '../../components/PageHeader'

import './styles.css'

const TeacherForm:React.FC = () => {
  const title = "Que incrivel que você quer dar aulas."
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        description="O primeiro passo é preencher esse formulário de inscrição."
        title={title} />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <div className="input-block">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name"/>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"/>
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp"/>
          </div>
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm
