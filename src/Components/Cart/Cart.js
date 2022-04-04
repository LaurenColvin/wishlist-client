import { useState, useEffect } from "react";

import './Cart.css'

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

    const [userData, setUserData] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])
    const [wardrobeItems, setWardrobeItems] = useState([])

    const fetchData = () => {
        fetch(props.urlBase + "/user/" + props.currentUser )
          .then((response) => response.json())
          .then((data) => setUserData(data.user))
    }

    useEffect(() => {
        fetchData()
      }, []);
  
    useEffect(() => {
      if (userData.cartItems != undefined) {
         setCartItems(userData.cartItems)
      }
      if (userData.wishlistItems != undefined) {
        setWishlistItems(userData.wishlistItems)
     }
     if (userData.wardrobeItems != undefined) {
        setWardrobeItems(userData.wardrobeItems)
     }
    }, [userData])

    useEffect(() => {
        fetchData()
    }, [showModal]);

    
    //////////////////// PURCHASE ITEM FUNCTIONS ////////////////////

    const removeWishlistItems = (item) => {
        const wishlistFilter = wishlistItems.filter((n) => n._id != item)
        let data = {
        wishlistItems: wishlistFilter,
        };
        let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        };
        fetch(props.urlBase + "/user/" + props.currentUser, options)
            .then((response) => response.json())
    }

    const removeCartItems = (item) => {
        const cartFilter = cartItems.filter((n) => n._id != item)
        setCartItems(cartFilter)
        let data = {
        cartItems: cartFilter,
        };
        let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        };
        fetch(props.urlBase + "/user/" + props.currentUser, options)
            .then((response) => response.json())
    }


    const addToWardrobe = (item) => {
        const wardrobeCopy = [...wardrobeItems];
        wardrobeCopy.push(item);
        setWardrobeItems(wardrobeCopy);
        let data = {
            wardrobeItems: wardrobeCopy,
            };
            let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            };
            fetch(props.urlBase + "/user/" + props.currentUser, options)
                .then((response) => response.json())
        removeCartItems(item);
        removeWishlistItems(item);
    }

    const handlePurchase = (event) => {
        event.preventDefault();
        addToWardrobe(event.target.id);
    }


    //////////////////// MAP THROUGH CART ITEMS ////////////////////

    let sum = 0;
    let budget = userData.budget;

    const list = cartItems.map((item) => {

        sum += item.price;

        //////////////////// REMOVE CART ITEMS ////////////////////

        const removeItem = (event) => {
            event.preventDefault();
            let itemsCopy = cartItems.filter((n) => n._id != event.target.id);
            setCartItems(itemsCopy)
            let data = {
            cartItems: itemsCopy,
            };
            let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            };
            fetch(props.urlBase + "/user/" + props.currentUser, options)
                .then((response) => response.json())
        };

        return (
                <div className='item-card'>
                    <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                    <h4 onClick={removeItem} className='delete-icon' id={item._id}>x</h4>
                    <div className='card-header'>
                        <h2>{item.title}</h2>
                        <h2>{item.brand} |    <span>${item.price}</span></h2>
                    </div>
                    <button onClick={handlePurchase} id={item._id}>Purchased</button>
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
                    <button onClick={handleShow} className='login-container-button'>Login</button>
                </div>
            ):(
                <div>
                    <div className='progress-bar' style={ budget > sum ? ({width:((sum/userData.budget)*60) +'vw'}):({width:'60vw'})}>
                        <h5 className='price'>Total Cost: ${sum}</h5>
                    </div>
                    <div className='inner-progress-bar' style={ budget < sum ? ({width:((userData.budget/sum)*60) +'vw'}):({width:'60vw'})}>
                        <h5 className='price'>Budget: ${userData.budget}</h5>
                    </div>
                    <div className='cart-items'>
                        {list}
                    </div>
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