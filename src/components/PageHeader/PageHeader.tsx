import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

interface PageHeaderProps {
  title: string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
  const {title, children} = props
  return (
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/" >
            <img src={backIcon} alt="voltar"/>
            </Link>
          <img src={logoImg} alt="proffy"/>
        </div>

        <div className="header-content">
          <strong>{title}</strong>
          {children}
        </div>


      </header>
  )
}

export default PageHeader