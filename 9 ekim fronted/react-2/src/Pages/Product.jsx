import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function Product() {

  // hooks
  const { id } = useParams()

  return (
    
    <>
    <h1>Ürün Detay Sayfası</h1>
    <hr />

    <div className='mb-4'>

        <Link to="/urunler">Geri Git</Link>

    </div>


    <p>Aradığınız koddaki ({id}) ürün bulunamadı</p>


    
    </>
  )
}
