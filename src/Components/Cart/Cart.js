import { useState, useEffect } from "react";

import Login from "../Login/Login";

const Cart = (props) => {

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

    // const [userData, setUserData] = useState({})
    const [cartItems, setCartItems] = useState([])

    const fetchData = () => {
        fetch(props.urlBase + "/user/" + props.currentUser )
          .then((response) => response.json())
          .then((data) => setCartItems(data.user.cartItems))
    }

    useEffect(() => {
        fetchData()
      }, []);

    useEffect(() => {
        fetchData()
    }, [showModal]);

    //////////////////// MAP THROUGH CART ITEMS ////////////////////

    const list = cartItems.map((item) => {
        return (
                <div className='item-card'>
                    <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                    <h4 className='delete-icon' id={item._id}>x</h4>
                    <div className='card-header'>
                        <h2>{item.title}</h2>
                        <h2>{item.brand} |    <span>${item.price}</span></h2>
                    </div>
                </div>
        )
    })

    return (
        <div className='cart-page'>
            <div className='cart-box'>
                <h1>You found your dream piece!</h1>
            </div>
            { props.currentUser == "" ? (
                <div className='login-container'>
                    <button onClick={handleShow}>Login</button>
                </div>
            ):(
                <div>
                    <h1>Ready to purchase {props.userName}?</h1>
                    <div className='cart-items'>
                        {list}
                    </div>
                    <button>Purchased</button>
                </div>
            )}
            { showModal == true ? (
                <Login handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} userName={props.userName} setUsername={props.setUsername}/>
            ):(
                <div></div>
            )}
        </div>
    )
}

export default Cart;