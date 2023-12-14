import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import CardComponent from '../Components/Card'

export default function CokSatilan() {

    // states
    const [data, setData] = useState(null)

    const make_api_req = async () => {

        const request = await fetch ("https://fakestoreapi.com/products")
        const response = await request.json()
        
        // veriyi setle
        setData(response)
        console.log("API REQUEST:", response)
    }

    

    useEffect(() => {

        make_api_req()
    }, [])
  

 // state nulldaysa
  if (data === null) {

        return <div className='text-center'>

                <p>Lütfen bekleyiniz...</p>
        </div>
  }



return (
    <div>
      
      <h1>TEST APİ</h1>
      <hr />

      <div className="d-flex m-5" style={{flexWrap: "wrap", justifyContent: "space-evenly"}}>

            {data.map((item) => {

            return <CardComponent key={item.id} data = {item} service= "fakestore">  </CardComponent>
            })}

        </div>  


    </div>
  )
}
