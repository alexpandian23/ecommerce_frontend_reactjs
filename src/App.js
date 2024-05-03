
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Login } from './logintask/Login';
import { Signup } from './logintask/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import  Cart  from './Pages/Cart';
import { Shop } from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import { Productlist } from './Components/Addfile/Productlist';
import men_banner from './Components/Assets/banner_mens.png'
// import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'
// import ShopContextProvider from './Context/ShopContext'
import { Men } from './Pages/Men';
import { Women } from './Pages/Women';
import { Kid } from './Pages/Kid';
import { Admin } from './Components/Admin/Admin';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        {/* <ShopContextProvider />  */}
        <Routes>
          {/* <Route path='/nav' element={ <Navbar/> } />   */}
          <Route path='/productlist' element={<Productlist />} />
          <Route path='/' element={<Hero />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/mens' element={<Men banner={men_banner} />} />
          <Route path='/womens' element={<Women category="womens" />} />
          <Route path='/kids' element={<Kid category="kid" />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/mens/:category' element={<Men />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />

          {/* </Route>  */}
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
