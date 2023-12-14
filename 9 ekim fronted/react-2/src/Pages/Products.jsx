import React, { useState, useEffect} from 'react'
import CardComponent from '../Components/Card'


export default function Products() {
  // states
  const [product, setProduct] = useState(null)

  const make_api_request = async () => {

        const request = await fetch('https://randomuser.me/api/?results=100')
        const response = await request.json()

        console.log("APİ:", response)
        // setter ile güncelle
        setProduct(response.results)
  }



  useEffect(() => {

        make_api_request()

  }, [])


  if (product === null) {

        return <div className='text-center'>

            <p>Lütfen bekleyiniz...</p>
        </div>
  }
  return (

        <>
        
            <h3>Ürünler</h3>
            <hr />



            <div className="d-flex m-5" style={{flexWrap: "wrap", justifyContent: "space-evenly"}}>

                    {product.map((user) => {

                    return <CardComponent key = {user.login.uuid} data = {user} service = "randomuserapi"></CardComponent>

                    })}

            </div>  
        </>
  )
}
