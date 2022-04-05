import { useState, useEffect } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


const AddItems = (props) => {

    //////////////// FETCH ALL ITEMS ///////////////////

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        if (props.currentUser !== "") {
            fetch(props.urlBase + "/user/" + props.currentUser )
            .then((response) => response.json())
            .then((data) => setAllItems(data.user.wishlistItems))
        }
      }, []);


    ////////////////// USE STATE FOR FORM INPUT /////////////////////
    
    const [newItem, setNewItem] = useState({
            category: props.category,
            title: "",
            brand: "",
            price: Number,
            size: "",
            color: "",
            link: "",
            imgUrl: ""
        });

    const handleChange = (event) => {
        event.persist();
        setNewItem((prevItem) => {
        const editedItem = {
            ...prevItem,
            [event.target.name]: event.target.value,
        };
        return editedItem;
        });
    };

    ////////////////// POST NEW ITEM //////////////////////////

    const postItem = () => {
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
          };
        fetch(props.urlBase + '/item', options)
            .then((response) => response.json())
            .then((data) => putItem(data.item))
            .then(() => setNewItem({
                category: props.category,
                title: "",
                brand: "",
                price: Number,
                size: "",
                color: "",
                link: "",
                imgUrl: ""
            }))
    }

    const putItem = (item) => {
        const itemsCopy = [...allItems];
        itemsCopy.push(item);
        props.setItems(itemsCopy)
        let data = {
        wishlistItems: itemsCopy,
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

    const handleSubmit = (event) => {
        event.preventDefault();
        postItem();
        props.handleClose()
    };

    return (
        <div className='add-items'>
            <div className='dark-overlay' onClick={props.handleClose}></div>
            <div className='modal'>
                <FontAwesomeIcon onClick={props.handleClose} className="close-icon" icon={faXmark} size="2x" style={{color:"#FA5272"}}/>
                <h3>ADD ITEM</h3>
                <form className='new-user-form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="text-box" name="title" placeholder="Title" value={newItem.title} type="text" required/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="brand" placeholder="Brand" value={newItem.brand} type="text" required/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="price" placeholder="Price" value={newItem.price} type="number" required/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="link" placeholder="Link" value={newItem.link} type="text" required/>
                    <br/>
                    <label>Right click on image and copy image address:</label>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="imgUrl" placeholder="Image URL" value={newItem.imgUrl} type="text" required/>
                    <br/>
                    <label>Optional:</label>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="size" placeholder="Size" value={newItem.size} type="text"/>
                    <br/>
                    <input onChange={handleChange} className="text-box" name="color" placeholder="Color" value={newItem.color} type="text"/>
                    <br/>
                    <input className="login-button" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default AddItems;