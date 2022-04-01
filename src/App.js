import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import About from './Components/About/About';
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';


function App() {

  const urlBase = 'https://obscure-eyrie-60165.herokuapp.com'

  console.log(urlBase);

  //////////// Current User UseState for all Components /////////////////
  const [currentUser, setCurrentUser] = useState("");
  const [userName, setUsername] = useState("");


  return (
    <div className="App">
      <Header userName={userName}/>
      <main className="main">
        <ScrollTop>
          <Routes>
            <Route path="/" element={  <Home urlBase={urlBase} currentUser={currentUser} setCurrentUser={setCurrentUser} userName={userName} setUsername={setUsername}/> }/>
            <Route path="/my-wishlist" element={  <Category urlBase={urlBase} currentUser={currentUser} setCurrentUser={setCurrentUser} userName={userName} setUsername={setUsername}/> }/>
            <Route path="/about" element={  <About/> }/>
            <Route path="/user" element={  <User urlBase={urlBase} currentUser={currentUser} setCurrentUser={setCurrentUser} userName={userName} setUsername={setUsername}/> }/>
            <Route path="/cart" element={  <Cart urlBase={urlBase} currentUser={currentUser} setCurrentUser={setCurrentUser} userName={userName} setUsername={setUsername}/> }/>
          </Routes>
        </ScrollTop>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
