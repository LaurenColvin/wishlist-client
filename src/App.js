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

  //////////// Current User UseState for all Components /////////////////
  const [currentUser, setCurrentUser] = useState("");


  return (
    <div className="App">
      <Header/>
      <main className="main">
        <ScrollTop>
          <Routes>
            <Route path="/" element={  <Home currentUser={currentUser} setCurrentUser={setCurrentUser}/> }/>
            <Route path="/category" element={  <Category currentUser={currentUser}/> }/>
            <Route path="/about" element={  <About/> }/>
            <Route path="/user" element={  <User currentUser={currentUser}/> }/>
            <Route path="/cart" element={  <Cart currentUser={currentUser} setCurrentUser={setCurrentUser}/> }/>
          </Routes>
        </ScrollTop>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
