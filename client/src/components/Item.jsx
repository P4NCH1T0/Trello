import React from 'react'
import Button from './Button'
import './styles_components/Item.css'

function Item() {
  return (
    <div className='container-item'>
        <h4 className='title-item'>Titulo</h4>
        <h6 className='desc-item'>Descripcion</h6>
        <Button/>
    </div>
  )
}

export default Item