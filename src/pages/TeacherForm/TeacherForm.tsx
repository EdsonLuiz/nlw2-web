import React, {useState} from 'react'
import {PageHeader} from '../../components/PageHeader'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Select} from '../../components/Select'

const TeacherForm:React.FC = () => {
  const title = "Que incrivel que você quer dar aulas."

  const [scheduleItems, setScheduleItems] = useState(
  [
    {week_day: 0, from: '', to: ''}
  ]
  )


  function addNewDcheduleItem() {
    const schedule = {week_day: 0, from: '', to: ''}
    setScheduleItems([...scheduleItems, schedule])
  }

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
          <TextArea name="bio" label="Biografia" />
        </fieldset>
        
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'História', label: 'História'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'},
            ]}
            name="subject" 
            label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponiveis
            <button type="button" onClick={addNewDcheduleItem}>+ Novo Horario</button>
          </legend>

          {scheduleItems.map(scheduleItem => (
          <div key={scheduleItem.week_day} className="schedule-item">
          <Select 
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'},
            ]}
            name="week_day" 
            label="Dia da semana" />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
