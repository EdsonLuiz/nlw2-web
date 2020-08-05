import React from 'react'

import './styles.css'


import {PageHeader} from '../../components/PageHeader'
import {TeacherItem} from '../../components/TeacherItem'
import {Input} from '../../components/Input'
import {Select} from '../../components/Select'

const TeacherList:React.FC = () => {
  const title = "Estes são os proffys disponíveis."
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={title}>
        <form  id="search-teachers">

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

          <Input name="time" label="Horário" type="time"/>
          
          {/* <div className="input-block"> */}
          {/*   <label htmlFor="subject">Matéria</label> */}
          {/*   <input type="text" id="subject"/> */}
          {/* </div> */}

          {/* <div className="input-block"> */}
          {/*   <label htmlFor="week_day">Dia da semana</label> */}
          {/*   <input type="text" id="week_day"/> */}
          {/* </div> */}

          {/* <div className="input-block"> */}
          {/*   <label htmlFor="time">Horário</label> */}
          {/*   <input type="text" id="time"/> */}
          {/* </div> */}
        </form>
        </PageHeader>

      <main>
        <TeacherItem />       
        <TeacherItem />       
        <TeacherItem />       
        <TeacherItem />       
        <TeacherItem />       
      </main>

    </div>
  )
}

export default TeacherList
