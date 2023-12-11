import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import SiteNav from '../Components/Nav'
import Test from '../Components/Test'

export default function Product() {
        // query
        const { urunId } = useParams()
        // states
        const [product, setProduct] = useState(null)
        const [error, setError] = useState(false)
        // api
        const make_api_request = async () => {

            try {
             // ifade sorun yoksa çalışır
             const request = await fetch(`https://fakestoreapi.com/products/${urunId}`)
             const response = await request.json()
     
             console.log("APİ :", response)
             setProduct(response)

            } catch {
                // bir hata meydana geldi bunu hallet
                console.log("CATCH GİRDİ")
                setError(true)
            }
           
        }
        
        // effect
        useEffect(() => {
    
            make_api_request()
    
        }, [])
    
  

    if (product === null && error !== true) {

        return <div className='text-center'>Ürün yükleniyor bekleyiniz...</div>
    }


    if (error) {

        return <div className='text-center'>Üzgünüz, Böyle bir ürünümüz yok...</div>
    }

    return (
    
    <>
    
    <SiteNav></SiteNav>


    <Test name = {product.title}> </Test>
    <div className="d-flex" style={{flexWrap: "wrap", justifyContent: "space-around"}}>


                <Card key={product.id} className='m-3' style={{ width: '25%' }}>

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

       

            </div>



    </>
  )
}
