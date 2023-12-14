import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Utils/database'
import { AuthProvider } from '../Context/UserContext'

export default function Login() {

    const { setUser } = useContext(AuthProvider)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (event) => {

        event.preventDefault()

        const targetUser = db.find((target) => target.name === name && target.password === password)

        if (!targetUser) {

            alert("böyle bir kullanıcı bulunamadı")
        } else {

            setUser(targetUser)
            alert("STATE GUNCELLENDI")
        }


    }

    return (
    
    <>

        <h3>Giriş Yap</h3>
        <hr></hr>

        <form className='w-50' onSubmit={handleLogin}>

           
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

            <div className='mb-3'>

                <Link to="/register">Hesabın Yoksa Kayıt Ol</Link>
            </div>
            <button type='submit' className='btn btn-success'>Giriş Yap</button>
        </form>
    
    
    </>
  )
}
