import React, { useState } from 'react'
import { db } from '../Utils/database'
import { useLocation } from 'react-router-dom'


export default function Register() {

  const yonlendir = useLocation()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = (event) => {

    // varsayilan değerleri unut
    event.preventDefault()

    db.push({ name: name, role: "user", password: password})

    console.log("veriler:", name, password, db)

    // login sayfasına yönlendir
    window.location.href = "/login"

  }

  return (
    
    <>

        <h3>Kayıt Ol</h3>
        <hr></hr>

        <form className='w-50' onSubmit={handleRegister}>

           
            <div className='mb-3'>

                    <input className='form-control' type="text" placeholder='username'
                     onChange={(e) => setName(e.target.value)}
                    />
            </div>

            <div className='mb-3'>

                <input className='form-control' type="password" placeholder='password'
                
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit' className='btn btn-success'>Kayıt Ol</button>
        </form>
    
    
    </>
  )
}
