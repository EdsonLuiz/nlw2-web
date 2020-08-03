import React from 'react'

import './styles.css'

import LogoImg from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purppleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing:React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={LandingImg} 
          alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas.
          <img src={purppleHeartIcon} alt="coração roxo"/>
        </span>
        
      </div>
    </div>
  )
}

export default Landing