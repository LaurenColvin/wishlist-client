import './App.css';
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
  return (
    <div className="App">
      <Header/>
      <main>
        <ScrollTop>
          <Routes>
            <Route path="/" element={  <Home/> }/>
            <Route path="/category" element={  <Category/> }/>
            <Route path="/about" element={  <About/> }/>
            <Route path="/user" element={  <User/> }/>
            <Route path="/cart" element={  <Cart/> }/>
          </Routes>
        </ScrollTop>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
