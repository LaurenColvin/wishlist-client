import {Link} from 'react-router-dom'
import { useState } from "react";
import Login from '../Login/Login';


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
        <div className='home-page'>
            <div className='hero-image'>
                <h1>Shop Smarter,<br/> Not Harder.</h1>
                <button className='button' onClick={handleShow}>Start Dreaming</button>
            </div>
            <div className='trending'>
                <h2>Popular Categories</h2>
                <div className='category-container'>
                    <div className='trending-category'>
                        <h3>Wedding Guest Dress</h3>
                    </div>
                    <div className='trending-category'>
                        <h3>Vacation Swim Suit</h3>
                    </div>
                    <div className='trending-category'>
                        <h3>Classic Work Blazer</h3>
                    </div>
                </div>
            </div>
            <div className='instructions'>
                <h2>How to use <span>Wishlist</span></h2>
                <div className='instructions-container'>
                    <div className='rule'>
                        <h3>1.</h3>
                        <h4>Create a category</h4>
                    </div>
                    <div className='rule'>
                        <h3>2.</h3>
                        <h4>Add items from different brands</h4>
                    </div>
                    <div className='rule'>
                        <h3>3.</h3>
                        <h4>Use our filtering system to compare</h4>
                    </div>
                    <div className='rule'>
                        <h3>4.</h3>
                        <h4>Add to cart and check your budget for the month</h4>
                    </div>
                    <div className='rule'>
                        <h3>5.</h3>
                        <h4>Track your purchases in my wardrobe</h4>
                    </div>
                </div>
            </div>
            <div className='user-login'>
                <h2>Ready to get started?</h2>
                <button className='button' onClick={handleShow}>User Login</button>
            </div>
            { showModal == true ? (
                <Login handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} userName={props.userName} setUsername={props.setUsername}/>
            ):(
                <div></div>
            )}
        </div>
    )
}

export default Home;