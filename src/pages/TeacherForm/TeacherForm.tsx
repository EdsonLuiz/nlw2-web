import React, {useState, FormEvent} from 'react'
import {useHistory} from 'react-router-dom'
import {PageHeader} from '../../components/PageHeader'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea'
import {Select} from '../../components/Select'
import api from '../../services/api'

const TeacherForm:React.FC = () => {
  const title = "Que incrivel que você quer dar aulas."

  const history = useHistory()

  const [nameField, setNameField] = useState('')
  const [avatarField, setAvatarField] = useState('')
  const [whatsappField, setWhatsappField] = useState('')
  const [bioField, setBioField] = useState('')

  const [subjectField, setSubjectField] = useState('')
  const [costField, setCostField] = useState('')

  const [scheduleItems, setScheduleItems] = useState([{week_day: 0, from: '', to: ''}])

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    const classes = {
      name: nameField,
      avatar: avatarField,
      whatsapp: whatsappField,
      bio: bioField,
      subject: subjectField,
      cost: Number(costField),
      schedule: scheduleItems
    }

    try {
      await api.post('classes', classes)
      alert('Cadastro realizado')
      history.push('/')
    } catch (error) {
      alert('Erro no cadastro')
    }
  }

  function addNewDcheduleItem() {
    const schedule = {week_day: 0, from: '', to: ''}
    setScheduleItems([...scheduleItems, schedule])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        description="O primeiro passo é preencher esse formulário de inscrição."
        title={title} />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input 
            name="name" 
            label="Nome Completo" 
            value={nameField} 
            onChange={(e) => {setNameField(e.target.value)}} />
          <Input 
            name="avatar" 
            label="Avatar" 
            value={avatarField} 
            onChange={(e) => {setAvatarField(e.target.value)}} />
          <Input 
            name="whatsapp" 
            label="Whatsapp" 
            value={whatsappField} 
            onChange={(e) => {setWhatsappField(e.target.value)}} />
          <TextArea 
            name="bio" 
            label="Biografia" 
            value={bioField} 
            onChange={(e) => {setBioField(e.target.value)}} />
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
            value={subjectField}
            onChange={(e) => {setSubjectField(e.target.value)}}
            name="subject" 
            label="Matéria" />
          <Input 
            value={costField}
            onChange={(e) => {setCostField(e.target.value)}}
            name="cost" 
            label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponiveis
            <button type="button" onClick={addNewDcheduleItem}>+ Novo Horario</button>
          </legend>

          {scheduleItems.map(( scheduleItem, index ) => (
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
            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
            value={scheduleItem.week_day}
            name="week_day" 
            label="Dia da semana" />
            <Input 
              value={scheduleItem.from}
              onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
              name="from" 
              label="Das" 
              type="time" />
            <Input 
              value={scheduleItem.to}
              onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
              name="to" 
              label="Até" 
              type="time" />
          </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="submit">Salvar cadastro</button>
        </footer>
      </form>
      </main>
    </div>
  )
}

export default TeacherForm
