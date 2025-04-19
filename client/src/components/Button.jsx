import React from 'react'
import './styles_components/Button.css'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <button><Link to="/dashboard">Enter</Link></button>
  )
}

export default Button