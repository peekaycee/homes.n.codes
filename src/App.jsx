import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Layouts/Layout'
import { AboutPage, ContactPage, HomePage, Listings, Login, Properties, Register, SavedProperties, ViewProperties } from './Pages/index.pages'
import Footer from "./Components/Footer/Footer"
// import Script from './Components/Script/Script'
function App() {

  return (
    <>
    <Layout/>
    <Routes>
        <Route path='/' element= {<HomePage/>}  />
        <Route path='/about' element= {<AboutPage/>}  />
        <Route path='/contact' element= {<ContactPage/>}  />
        <Route path='/listings' element= {<Listings/>}  />
        <Route path='/login' element= {<Login/>}  />
        <Route path='/properties' element= {<Properties/>}  />
        <Route path='/register' element= {<Register/>}  />
        <Route path='/saved' element= {<SavedProperties/>}  />
        <Route path='/View' element= {<ViewProperties/>}  />
    </Routes>
    <Footer/>
    {/* <Script /> */}
    </>
  )
}

export default App
