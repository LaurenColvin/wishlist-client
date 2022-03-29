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

    ////////////////// USE STATE FOR FORM INPUT /////////////////////
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        budget: Number,
    });

    const handleChange = (event) => {
        event.persist();
        setNewUser((prevUser) => {
        const editedUser = {
            ...prevUser,
            [event.target.name]: event.target.value,
        };
        return editedUser;
        });
    };

    ////////////////// POST NEW USER //////////////////////////

    const handleSubmit = (event) => {
        event.preventDefault();
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          };
        fetch(props.urlBase + '/user', options)
            .then((response) => response.json())
            .then((data) => props.setCurrentUser(data.user._id))
            .then(() => props.setUsername(newUser.firstName))
            .then(() => setNewUser({
                firstName: "",
                lastName: "",
                email: "",
                budget: Number,
            }))
            .then(() => props.handleClose())
    };

    ////////////////// FETCH USER DATA ////////////////////

    const [email, setEmail] = useState("");

    const userHandleChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        let loginUser = users.filter((n) => n.email === email);
        setEmail("");
        props.setCurrentUser(loginUser[0]._id);
        props.setUsername(loginUser[0].firstName)
        props.handleClose()
    }

    return (
        <div>
            <div className='dark-overlay' onClick={props.handleClose}></div>
            <div className='modal'>
                <FontAwesomeIcon onClick={props.handleClose} className="close-icon" icon={faXmark} size="2x" style={{color:"#FA5272"}}/>
                <h2>CREATE NEW USER</h2>
                <form className='new-user-form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="text-box" name="firstName" placeholder="First Name" value={newUser.firstName} type="text" required/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="lastName" placeholder="Last Name" value={newUser.lastName} type="text" required/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="email" placeholder="Email" value={newUser.email} type="text" required/>
                    <br/>
                    <label>How much do you want to spend each month?</label>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="budget" placeholder="Budget" value={newUser.budget} type="number" required/>
                    <br/>
                    <input className="login-button" type="submit" value="Submit"></input>
                </form>
                <h2>LOGIN IN</h2>
                <form className='new-user-form' onSubmit={handleLogin}>
                    <input onChange={userHandleChange} className="text-box" name="email" placeholder="Email" value={email} type="text" required/>
                    <br/>
                    <input className="login-button" type="submit" value="LOGIN"></input>
                </form>
            </div>
        </div>
    )
}

export default Login;