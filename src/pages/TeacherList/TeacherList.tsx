import React, {useState, FormEvent} from 'react'

import './styles.css'


import {PageHeader} from '../../components/PageHeader'
import {TeacherItem} from '../../components/TeacherItem'
import {Input} from '../../components/Input'
import {Select} from '../../components/Select'
import api from '../../services/api'
import {Teacher} from '../../components/TeacherItem/TeacherItem'


const TeacherList:React.FC = () => {
  const title = "Estes são os proffys disponíveis."

  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()
    const formData = {
      subject,
      week_day,
      time
    }
    const response = await api.get('classes', {
      params: formData
    })

    setTeachers(response.data)

    console.log(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={title}>
        <form onSubmit={searchTeachers} id="search-teachers">

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
            value={subject}
            onChange={e => setSubject(e.target.value)}
            name="subject" 
            label="Matéria" />

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
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            name="week_day" 
            label="Dia da semana" />

          <Input 
            value={time}
            onChange={e => { setTime(e.target.value) }}
            name="time" 
            label="Horário" type="time"/>

          <button type="submit">
            Buscar
          </button>

        </form>
        </PageHeader>

      <main>
        {teachers.map(( teacher: Teacher ) => (
          <TeacherItem key={teacher.id} teacher={teacher} />       
        ))}
      </main>

    </div>
  )
}

export default TeacherList
