import React from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CardComponent(props) {

   const item = props.data


   const api_data = {}

   if (props.service === "fakestore") {
    
        api_data.title = item.title
        api_data.image = item.image
        api_data.id = item.id
        api_data.href = `/encok/satilan/${item.id}`

   } else if (props.service === "randomuserapi") {

        api_data.title = `${item.name.first} ${item.name.last}`
        api_data.image = item.picture.large
        api_data.id = item.login.uuid
        api_data.href = `/urunler/${item.login.uuid}`
   }


   const arrangeData = () => {

        return <Card style={{width: "25%"}} className='m-1'>

                <Card.Img variant="top" src={api_data.image} />
                <Card.Body>
                <Card.Title>{api_data.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

                <Link type='button' className='btn btn-primary' to={api_data.href}>Detayına git</Link>
                </Card.Body>

        </Card>
   

   }


  return (

        <>
             

                {arrangeData()}
     
        
        </>
  )
}
