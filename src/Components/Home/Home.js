import {Link} from 'react-router-dom'
import { useState } from "react";


const Home = () => {

    /* MODAL SHOW */

    const [showModal, setShowModal] = useState(false);

    const handleShow = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    /* FORM USESTATES AND HANDLE CHANGES */

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [blank, setBlank] = useState("");

    const firstNameHandleChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
      };

    const lastNameHandleChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
      };

    const emailHandleChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
      };

    const budgetHandleChange = (event) => {
        event.preventDefault();
        setBudget(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setBudget("");
        console.log({firstName});
      };

    const userHandleChange = (event) => {
        event.preventDefault();
        setBlank(event.target.value);
        setCurrentUser(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setBlank("");
        console.log(currentUser);
    }

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
            { showModal == true ? (
                <div className='modal'>
                    <h2>CREATE NEW USER</h2>
                    <form className='new-user-form' onSubmit={handleSubmit}>
                        <input onChange={firstNameHandleChange} className="text-box" name="first-name" placeholder="First Name" value={firstName} type="text" required/>
                        <br/>
                        <input onChange={lastNameHandleChange} className="text-box" name="last-name" placeholder="Last Name" value={lastName} type="text" required/>
                        <br/>
                        <input onChange={emailHandleChange} className="text-box" name="last-name" placeholder="Email" value={email} type="text" required/>
                        <br/>
                        <label>How much do you want to spend each month?</label>
                        <br/>
                        <input onChange={budgetHandleChange} className="text-box" name="last-name" placeholder="Budget" value={budget} type="number" required/>
                        <br/>
                        <input className="submit-button" type="submit" value="Submit"></input>
                    </form>
                    <h2>LOGIN IN</h2>
                    <form className='new-user-form' onSubmit={handleLogin}>
                        <input onChange={userHandleChange} className="text-box" name="email" placeholder="Email" value={blank} type="text" required/>
                        <br/>
                        <input className="submit-button" type="submit" value="LOGIN"></input>
                    </form>
                    <button onClick={handleClose}>Exit</button>
                </div>
            ):(
                <div></div>
            )}
        </div>
    )
}

export default Home;