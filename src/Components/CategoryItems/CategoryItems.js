import { useState, useEffect } from 'react'

import './../Category/Category.css'

import ItemCard from '../ItemCard/ItemCard'
import AddItems from '../AddItems/AddItems'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const CategoryItems = (props) => {

    ////////////////// CATEGORY MENU //////////////////

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = (event) => {
        event.preventDefault();
        setShowMenu(!showMenu);
        setDeleteX(false);
    };

    ////////////////// DISPLAY ITEMS //////////////////

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = (event) => {
        event.preventDefault();
        setShowMore(!showMore);
    };

    //////////////// DELETE ITEM BUTTON //////////////

    const [deleteX, setDeleteX] = useState(false);

    const handleDeleteItems = (event) => {
        event.preventDefault();
        setShowMore(false)
        setDeleteX(true);
        setShowMenu(false);
    }

    //////////////// DELETE CATEGORY BUTTON //////////////

    const handleDeleteCategory = (event) => {
        event.preventDefault();
        props.handleDeleteCategory(event);
        setShowMenu(false);
    }

    ////////////////// ADD ITEMS MODAL //////////////////

    const [showModal, setShowModal] = useState(false);

    const handleShow = (event) => {
        event.preventDefault();
        setShowModal(true);
        setShowMenu(false);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    ////////////////// SET ITEMS WISHLIST ////////////////////

    const [categoryItems, setCategoryItems] = useState([])

    useEffect(() => {
    let itemsList = props.items.filter((n) => n.category.toLowerCase() === props.category.toLowerCase());
    setCategoryItems(itemsList)  
      }, []);

    useEffect(() => {
    let itemsList = props.items.filter((n) => n.category.toLowerCase() === props.category.toLowerCase());
    setCategoryItems(itemsList)  
        }, [props.items.length]);

    const handleDeleteItem = (event) => {
        event.preventDefault()
        fetch(props.urlBase + '/item/' + event.target.id, {method: "DELETE",})
            .then((response) => response.json())
            .then(()=> props.setEditItem(!props.editItem))
        setShowMenu(false);
        setDeleteX(false);
    }


    const list = categoryItems.map((item) => {
        return (
            <ItemCard item={item} key={item._id} handleDeleteItem={handleDeleteItem} deleteX={deleteX} currentUser={props.currentUser} editItem={props.editItem} setEditItem={props.setEditItem} cartItems={props.cartItems} setCartItems={props.setCartItems} urlBase={props.urlBase}/>
        )
    })

    return (
        <div className='category-box'>
            { props.currentUser === '' ? (
                <div className ='category-header'>
                        <h2>{props.category}</h2>
                        {showMore === true ? (
                                <FontAwesomeIcon onClick={handleShowMore} className="view-more-icon" icon={faAngleUp} size="2x" style={{color:"#FEFCF5"}}/>
                            ):(
                                <FontAwesomeIcon onClick={handleShowMore} className="view-more-icon" icon={faAngleDown} size="2x" style={{color:"#FEFCF5"}}/>
                            )}
                        <FontAwesomeIcon onClick={props.handleShow} className="more-icon" icon={faEllipsis} size="2x" style={{color:"#FEFCF5"}}/>
                </div>
                ):(
                <div className ='category-header'>
                    <h2>{props.category}</h2>
                    {categoryItems.length === 0 ? (<div></div>):(
                        <div>
                            {showMore === true ? (
                                <FontAwesomeIcon onClick={handleShowMore} className="view-more-icon" icon={faAngleUp} size="2x" style={{color:"#FEFCF5"}}/>
                            ):(
                                <FontAwesomeIcon onClick={handleShowMore} className="view-more-icon" icon={faAngleDown} size="2x" style={{color:"#FEFCF5"}}/>
                            )}
                            <FontAwesomeIcon onClick={handleShow} className="add-icon" icon={faCirclePlus} size="2x" style={{color:"#FEFCF5"}}/> 
                        </div>
                    )}
                    <FontAwesomeIcon onClick={handleMenu} className="more-icon" icon={faEllipsis} size="2x" style={{color:"#FEFCF5"}}/>
                </div>
            )}
            {categoryItems.length === 0 ? (
                <div>

                    { showMenu === true ? (
                        <div className='no-item-category-menu'>
                            <button className='mobile-button' onClick={handleShow}>Add New Item</button>
                            <button className='category-button' onClick={handleDeleteItems}>Delete Item</button>
                            <button className='category-button' id={props.category} onClick={handleDeleteCategory}>Delete Category</button>
                        </div>
                    ):(
                        <div>
                            <button className='add-item-button' onClick={handleShow}>Add Item</button>
                        </div>
                    )}
                </div>
            ):(
                <div>
                    { showMenu === true ? (
                        <div className='category-menu'>
                            <button className='mobile-button' onClick={handleShow}>Add New Item</button>
                            <button className='category-button' onClick={handleDeleteItems}>Delete Item</button>
                            <button className='category-button' id={props.category} onClick={handleDeleteCategory}>Delete Category</button>
                        </div>
                    ):(
                        <div></div>
                    )}
                    {showMore === false ? (<div className='category-items'>{list}</div>):(<h3 className='item-count'><span>{categoryItems.length}</span> items saved . . .</h3>)}
                </div>
            )}
            { showModal === true ? (
                <AddItems handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} category={props.category} setItems={props.setItems} items={props.items} />
            ):(
                <div></div>
            )}
        </div>
    )
}

export default CategoryItems;