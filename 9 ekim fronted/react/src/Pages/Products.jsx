import React, { useEffect, useState } from 'react'
import SiteNav from '../Components/Nav'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Products() {

    // states
    const [products, setProducts] = useState(null)

    // api
    const make_api_request = async () => {

        const request = await fetch("https://fakestoreapi.com/products")
        const response = await request.json()

        console.log("APİ :", response)
        setProducts(response)
    }
    
    // effect
    useEffect(() => {

        make_api_request()

    }, [])


    if (products === null) {

        return <div className='text-center'>

                <p>Ürünler yükleniyor...</p>
        </div>
    }

return (

    <>
    
    <SiteNav></SiteNav>
    <h3>Ürünlerimiz</h3>
    <hr />
    

    <div className="d-flex" style={{flexWrap: "wrap", justifyContent: "space-around"}}>


            {products.map((product) => {

                return <Card key={product.id} className='m-3' style={{ width: '25%' }}>

                        <Card.Title className='text-center'>{product.title}</Card.Title>

                        <Card.Img className='responsive-image' variant="top" src={product.image} />
                        <Card.Body className='card-container'>
                       
                            <Card.Text>
                                <b>Ürün Açıklaması:</b> {product.description} <br></br>
                                <b>Fiyat:</b> {product.price} TL <br></br>
                                <b>Kategori: {product.category} </b> 
                            </Card.Text>

                           
                            <Link className='btn btn-success' to={`/urunler/${product.id}`}>Ürün Detaylarına Git</Link>
                        </Card.Body>
                </Card>

            })}

    </div>
    
    </>


  )
}
