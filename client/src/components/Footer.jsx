import React from 'react'
import './styles_components/Footer.css'

function Footer() {
  return (
    <footer className='container-footer'>
      <ul className='list'>
        <li className='item'>
          Trello creado por Francisco Rocha Sierra
        </li>
        <li className='item'>
          Gracias por visitarlo
        </li>
        <br />
        <li className='item'>
          Para ver mas de mis trabajos visita
        </li>
        <li className='item'>
          <a href="https://github.com/P4NCH1T0?tab=overview&from=2025-04-01&to=2025-04-15">Prtafolio</a>    
        </li>
      </ul>
    </footer>
  )
}

export default Footer