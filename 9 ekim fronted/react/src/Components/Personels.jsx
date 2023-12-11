import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// https://randomuser.me/api/?results=5000

export default function Personels() {
// states
const [staff, setStaff] = useState(null)
// fonksiyonlar
const make_api_request = async () => {
    const endpoint = "https://randomuser.me/api/?results=100"
    // api isteği at
    const request = await fetch(endpoint)
    const response = await request.json()

    console.log("APIDAN GELEN VERİ:", response)
    // state güncelle
    setStaff(response.results)

}

// component yüklendiği zaman çalış:
// hooks
useEffect(() => {

    make_api_request()
}, [])


// istek işlendiği zaman
if (staff === null) {

    return <div className='text-center'>

            <p>İşleminiz devam ediyor lütfen bekleyiniz...</p>
    </div>
}

return (

        <>
     
        <div className="d-flex" style={{ flexWrap: "wrap", justifyContent: "space-around"}}>

  
                {staff?.map((user) => {

                const isim_soyisim = `${user.name.first} ${user.name.last}`

                return <Card className='m-3' style={{ width: '25%' }}>

                        <Card.Img variant="top" src={user.picture.large} />
                        <Card.Body>
                            <Card.Title className='text-center'>{isim_soyisim}</Card.Title>
                            <Card.Text>
                                <b>Ülke:</b> {user.location.country} <br></br>
                                <b>Şehir:</b> {user.location.city} <br></br>
                                <b>İletişim:</b> {user.email}
                            </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>

                })}

        </div>
        </>
  )
}
