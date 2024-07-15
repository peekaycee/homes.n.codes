import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import {
  AboutPage,
  ContactPage,
  HomePage,
  Listings,
  Login,
  Register,
  SavedProperties,
  ViewProperties,
} from './Pages/index.pages';
import Footer from './Components/Footer/Footer';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Script from './Components/Script/Script';
import Post from './Pages/PostProperties/Post';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  Flats,
  Houses,
  Cars,
  Shops,
  Shortlets,
  Others,
  Lands,
} from './Components/common/index.common';

function App() {
  
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listings" element={<Listings />}>
          <Route path="houses" element={<Houses />} />
          <Route path="flats" element={<Flats />} />
          <Route path="lands" element={<Lands />} />
          <Route path="shops" element={<Shops />} />
          <Route path="cars" element={<Cars />} />
          <Route path="others" element={<Others />} />
          <Route path="shortlets" element={<Shortlets />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/saved" element={<SavedProperties />} />
        <Route path="/view" element={<ViewProperties />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <Script />
    </>
  );
}

export default App;
