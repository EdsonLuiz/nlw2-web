import React from 'react'
import {PageHeader} from '../../components/PageHeader'

import './styles.css'
import {Input} from '../../components/Input'

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
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>
        
        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm
