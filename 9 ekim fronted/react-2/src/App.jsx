import { Route, Routes } from 'react-router-dom'
import './App.css'


// Pages
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import Product from './Pages/Product'
import CokSatilan from './Pages/CokSatilan'
import Register from './Pages/Register'
import Login from './Pages/Login'
// Layout
import MainLayout from './Layout/MainLayout'
import AdminPage from './Pages/AdminPage'
import PermissionRequired from './Layout/PermissionRequired'

function App() {



  return (

    <>
      
        {/* ROUTES */}
        <Routes>
          
              {/* MAIN LAYOUT */}
              <Route element={<MainLayout></MainLayout>}>

                  {/* public routes */}
                  <Route path='/' element={<HomePage></HomePage>}></Route>
                  <Route path='/urunler' element={<Products></Products>}></Route>
                  <Route path='/urunler/:id' element={<Product></Product>}></Route>
                  <Route path='/encok/satilan' element={<CokSatilan></CokSatilan>}></Route>
                  <Route path='/register' element= {<Register></Register>}></Route>
                  <Route path='/login' element= {<Login></Login>}></Route>

                  <Route path='*' element={<h1>Merhaba hata sayfasş</h1>}></Route>
              

                  {/* Private Routes */}
                  <Route element={<PermissionRequired></PermissionRequired>}>

                           <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
                  </Route>
            
              </Route>
             
             
        </Routes>

    </>
  )
}

export default App
