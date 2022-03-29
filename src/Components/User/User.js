import { useState, useEffect } from "react";
import Login from "../Login/Login";

const User = (props) => {

     ////////////////// LOGIN MODAL //////////////////

     const [showModal, setShowModal] = useState(false);

     const handleShow = (event) => {
         event.preventDefault();
         setShowModal(true);
     };
 
     const handleClose = () => {
         setShowModal(false);
     };

    //////////////// FETCH USER DATA ///////////////////

    const [userData, setUserData] = useState({})

    const fetchData = () => {
        fetch(props.urlBase + "/user/" + props.currentUser )
          .then((response) => response.json())
          .then((data) => setUserData(data.user));
    }

    useEffect(() => {
        fetchData()
        console.log(props.currentUser)
      }, []);

    useEffect(() => {
        fetchData()
    }, [showModal]);

    return (
        <div className='user-page'>
            <div className='user-box'>
                <h1>Shop Smarter, Not Harder!</h1>
            </div>
            { props.currentUser == "" ? (
                <div className='login-container'>
                    <button onClick={handleShow}>Login</button>
                </div>
            ):(
                <div>
                    <h1>Welcome {userData.firstName}</h1>
                    <button onClick={handleShow}>Switch User</button>
                </div>
            )}
            { showModal == true ? (
                <Login handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
            ):(
                <div></div>
            )}
        </div>
    )
}

export default User;