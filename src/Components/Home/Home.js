import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

import "./Home.css";

const Home = (props) => {
  ////////////////// LOGIN MODAL //////////////////

  const [showModal, setShowModal] = useState(false);

  const handleShow = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="home-page">
      <div className="hero-image">
        <h1>
          Shop Smarter,
          <br /> Not Harder.
        </h1>
        <Link to="/my-wishlist">
          <button className="button">Start Dreaming</button>
        </Link>
      </div>
      <div className="about-page">
        <div className="about-box">
          <h1>About Wishlist</h1>
        </div>
        <div className="about-text">
          <p>
            <span>
              Wishlist is an online shopping app to help you plan your
              purchases.
            </span>{" "}
            <br /> <br />
            So much better than having a million tabs open and carts filled with
            items you can’t remember at 20 different stores. Put all of your
            ideal items in one place to better plan and save up for your dream
            wardrobe! This app will also help with budgeting and making sure you
            are making the best purchase at the best price.
          </p>
        </div>
      </div>
      <div className="instructions">
        <h2>
          How to use <span>Wishlist</span>
        </h2>
        <div className="instructions-container">
          <div className="rule">
            <h3>1.</h3>
            <h4>Create a category for your items</h4>
          </div>
          <div className="rule">
            <h3>2.</h3>
            <h4>Add items from different brands</h4>
          </div>
          <div className="rule">
            <h3>3.</h3>
            <h4>Use our filtering system to compare</h4>
          </div>
          <div className="rule">
            <h3>4.</h3>
            <h4>Add to cart what you want to buy</h4>
          </div>
          <div className="rule">
            <h3>5.</h3>
            <h4>Check your budget for the month</h4>
          </div>
          <div className="rule">
            <h3>6.</h3>
            <h4>Track your purchases in my wardrobe</h4>
          </div>
        </div>
      </div>
      {props.currentUser !== "" ? (
        <div className="user-login">
          <h2>Ready to get started?</h2>
          <Link to="/my-wishlist">
            <button className="button">Add a Category</button>
          </Link>
        </div>
      ) : (
        <div className="user-login">
          <h2>Ready to get started?</h2>
          <button className="button" onClick={handleShow}>
            User Login
          </button>
        </div>
      )}
      <div className="trending">
        <h2>Popular Categories</h2>
        <Link className="category-link" to="/my-wishlist">
          <div className="trending-category" id="wedding">
            <h3>Wedding Guest Dress</h3>
          </div>
          <div className="trending-category" id="vacation">
            <h3>Vacation Swim Suit</h3>
          </div>
          <div className="trending-category" id="workout">
            <h3>Workout Sets</h3>
          </div>
        </Link>
      </div>
      {showModal === true ? (
        <Login
          handleClose={handleClose}
          urlBase={props.urlBase}
          currentUser={props.currentUser}
          setCurrentUser={props.setCurrentUser}
          userName={props.userName}
          setUsername={props.setUsername}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
