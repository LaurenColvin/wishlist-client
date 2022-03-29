import { useState } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


const Login = (props) => {

    /* FORM USESTATES AND HANDLE CHANGES */

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
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
        console.log(firstName);
        props.handleClose()
    };

    const userHandleChange = (event) => {
        event.preventDefault();
        setBlank(event.target.value);
        props.setCurrentUser(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        setBlank("");
        console.log(props.currentUser);
        props.handleClose()
    }

    return (
        <div>
            <div className='dark-overlay' onClick={props.handleClose}></div>
            <div className='modal'>
                <FontAwesomeIcon onClick={props.handleClose} className="close-icon" icon={faXmark} size="2x" style={{color:"#FA5272"}}/>
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
                    <input className="login-button" type="submit" value="Submit"></input>
                </form>
                <h2>LOGIN IN</h2>
                <form className='new-user-form' onSubmit={handleLogin}>
                    <input onChange={userHandleChange} className="text-box" name="email" placeholder="Email" value={blank} type="text" required/>
                    <br/>
                    <input className="login-button" type="submit" value="LOGIN"></input>
                </form>
            </div>
        </div>
    )
}

export default Login;