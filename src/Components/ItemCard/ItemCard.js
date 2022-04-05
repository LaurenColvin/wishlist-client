import { useState, useEffect } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import './ItemCard.css'

const ItemCard = (props) => {

    //////////////// FETCH ALL CART ITEMS ///////////////////

    const fetchData = () => {
        if (props.currentUser !== "") {
            fetch(props.urlBase + "/user/" + props.currentUser )
                .then((response) => response.json())
                .then((data) => props.setCartItems(data.user.cartItems))
        }
    }

    ////////////////// ADD TO CART ALERTS //////////////////

    const [cartSuccess, setCartSuccess] = useState(false);
    const [cartRemove, setCartRemove] = useState(false);
    const [checkMark, setCheckMark] = useState(false);

    useEffect(() => {
        fetchData()
        let check = props.cartItems.filter((n) => n._id === props.item._id);
        if (check.length >= 1) {
            setCheckMark(true)
        } else {
            setCheckMark(false)
        }
    }, []);


    ////////////////// PUT IN CART FUNCTION //////////////////


    const putItemCart = (item) => {
        let check = props.cartItems.filter((n) => n._id === props.item._id);
        let itemsCopy = []
        if (check.length >= 1) {
            itemsCopy = props.cartItems.filter((n) => n._id !== props.item._id);
            setCartRemove(true)
            setTimeout(function() {
                setCartRemove(false);
            }, 1000);
        } else {
            itemsCopy = [...props.cartItems];
            itemsCopy.push(item);
            setCartSuccess(true)
            setTimeout(function() {
                setCartSuccess(false);
            }, 1000);
        }
        props.setCartItems(itemsCopy)
        let data = {cartItems: itemsCopy,};
        let options = {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(data),
        };
        fetch(props.urlBase + "/user/" + props.currentUser, options)
            .then((response) => response.json())
    };


    const handleAddCart = (event) => {
        event.preventDefault();
        putItemCart(props.item._id)
        setCheckMark(!checkMark)
        props.setEditItem(!props.editItem)
    };

  return (
      <div>
        { props.currentUser === "" ? (
            <div className='item-card'>
                <a href={props.item.link} target='_blank'>
                    <img className='item-image' src={props.item.imgUrl} alt={props.item.title}/>
                </a>
                {props.deleteX === false ? (<div></div>):(<h4 onClick={props.handleDeleteItem} className='delete-icon' id={props.item._id}>x</h4>)}
                <div className='card-header'>
                    <h2>{props.item.title}</h2>
                    <h2>{props.item.brand} |    <span>${props.item.price}</span></h2>
                    {props.item.size !== undefined ? (<h3>{props.item.size} - {props.item.color}</h3>):(<div></div>)}
                </div>
            </div>
        ):(  
            <div>
                <div className='item-card'>
                    <a href={props.item.link} target='_blank'>
                        <img className='item-image' src={props.item.imgUrl} alt={props.item.title}/>
                    </a>
                    {props.deleteX === false ? (<div></div>):(<h4 onClick={props.handleDeleteItem} className='delete-icon' id={props.item._id}>x</h4>)}
                    <FontAwesomeIcon onClick={handleAddCart} icon={faCircleCheck} className='add-to-cart' size="1x" style={checkMark === false ? ({color:"#FA5272"}):({color:"#BFC199"})} />
                    <div className='card-header'>
                        <h2>{props.item.title}</h2>
                        <h2>{props.item.brand} |    <span>${props.item.price}</span></h2>
                        {props.item.size !== undefined ? (<h3>{props.item.size} - {props.item.color}</h3>):(<div></div>)}
                    </div>
                </div>
                { cartSuccess === true ? (
                    <div className='cart-success'>
                        <h4>Added to cart!</h4>
                    </div>
                ):(<div></div>)}
                { cartRemove === true ? (
                    <div className='cart-success'>
                        <h4>Removed from cart!</h4>
                    </div>
                ):(<div></div>)}
            </div>
        )}
    </div>
  );
};

export default ItemCard;