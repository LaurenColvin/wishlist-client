import { useState, useEffect } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faH} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ItemCard = (props) => {

     //////////////// FETCH ALL CART ITEMS ///////////////////

    //  const [allCartItems, setAllCartItems] = useState([]);

     const fetchData = () => {
         if (props.currentUser != "") {
             fetch(props.urlBase + "/user/" + props.currentUser )
             .then((response) => response.json())
             .then((data) => props.setCartItems(data.user.cartItems))
         }
     }

    ////////////////// COLOR CHANGE FOR ICONS //////////////////

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

    const putItemCart = (item) => {
        let check = props.cartItems.filter((n) => n._id === props.item._id);
        let itemsCopy = []
        if (check.length >= 1) {
            itemsCopy = props.cartItems.filter((n) => n._id != props.item._id);
        } else {
            itemsCopy = [...props.cartItems];
            itemsCopy.push(item);
        }
        props.setCartItems(itemsCopy)
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


    const handleAddCart = (event) => {
        event.preventDefault();
        putItemCart(props.item._id)
        setCheckMark(!checkMark)
        props.setEditItem(!props.editItem)
    };

  return (
    <div className='item-card'>
        <a href={props.item.link} target='_blank'><img className='item-image' src={props.item.imgUrl} alt={props.item.title}/></a>
        {props.deleteX === false ? (<div></div>):(<h4 onClick={props.handleDeleteItem} className='delete-icon' id={props.item._id}>x</h4>)}
        <FontAwesomeIcon onClick={handleAddCart} icon={faCircleCheck} className='add-to-cart' size="1x" style={checkMark == false ? ({color:"#FA5272"}):({color:"#BFC199"})} />
        <div className='card-header'>
            <h2>{props.item.title}</h2>
            <h2>{props.item.brand} |    <span>${props.item.price}</span></h2>
        </div>
    </div>
  );
};

export default ItemCard;