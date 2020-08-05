import React from 'react'

import './styles.css'


import {PageHeader} from '../../components/PageHeader'
import {TeacherItem} from '../../components/TeacherItem'
import {Input} from '../../components/Input'

const TeacherList:React.FC = () => {
  const title = "Estes são os proffys disponíveis."
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={title}>
        <form  id="search-teachers">

          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
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
