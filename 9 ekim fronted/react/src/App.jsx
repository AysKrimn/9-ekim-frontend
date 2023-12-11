import { Route, Routes } from 'react-router-dom'
import './App.css'


// components

// pages
import HomePage from './Pages/HomePage'
// çoklu ürün
import Products from './Pages/Products'
// çoklu ürünün detay sayf
import Product from './Pages/Product'
import ErrorPage from './Pages/404'


function App() {

    const changeMod = () => {

       const root = document.getElementById('root')
       root.classList.toggle('dark')



       if (root.getAttribute("data-bs-theme")) {

           root.removeAttribute('data-bs-theme')
       } else {

          root.setAttribute('data-bs-theme', 'dark')
       }
   
      }
    //Genelde Routing için kullanılır 

    return ( 
    <>
        <button onClick={changeMod}>Mod Değiştir</button>

        <Routes>

              {/* PUBLIC ROUTES */}
              <Route path='/' element={<HomePage></HomePage>} ></Route>
              <Route path='/urunler' element={<Products></Products>} ></Route>
              <Route path='/urunler/:urunId' element={<Product></Product>} ></Route>
              {/* Hata Sayfası */}
              <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>

    </>
  )
}

export default App
