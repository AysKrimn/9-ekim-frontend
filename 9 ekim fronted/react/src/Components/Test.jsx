import React from 'react'
import { Link } from 'react-router-dom'

export default function Test(props) {

  const { name } = props

  return (

        <Link to="/urunler">{name} ürünüyle işiniz bittiyse geri gidin</Link>
  )
}
