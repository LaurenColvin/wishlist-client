import { useState, useEffect } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


const Login = (props) => {

    //////////// FETCH ALL USERS //////////////

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(props.urlBase + "/user")
          .then((response) => response.json())
          .then((data) => setUsers(data.user));
      }, []);

    const getUsers = () => {
        fetch(props.urlBase + '/user')
            .then((response) => response.json())
            .then((data) => setUsers(data.user))
    }

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

    ////////////////// POST NEW USER //////////////////////////

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "budget": budget
        }
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
        fetch(props.urlBase + '/user', options)
            .then((response) => response.json())
            .then((data) => props.setCurrentUser(data.user._id))
            .then(() => setFirstName(""))
            .then(() => setLastName(""))
            .then(() => setEmail(""))
            .then(() => setBudget(""))
            .then(() => props.handleClose())
            .then(() => getUsers())
    };


    ////////////////// FETCH USER DATA ////////////////////

    const userHandleChange = (event) => {
        event.preventDefault();
        setBlank(event.target.value);
    }



    const handleLogin = (event) => {
        event.preventDefault();
        let loginUser = users.filter((n) => n.email === blank);
        setBlank("");
        props.setCurrentUser(loginUser[0]._id);
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