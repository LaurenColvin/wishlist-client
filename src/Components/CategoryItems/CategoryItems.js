import { useState, useEffect } from 'react'

import AddItems from '../AddItems/AddItems'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const CategoryItems = (props) => {

    ////////////////// COLOR CHANGE FOR ICONS //////////////////

    const [checkMark, setCheckMark] = useState(false);

    const handleAddCart = (event) => {
        event.preventDefault();
        setCheckMark(!checkMark);
    };

    ////////////////// CATEGORY MENU //////////////////

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = (event) => {
        event.preventDefault();
        setShowMenu(!showMenu);
        setDeleteX(false);
    };

    //////////////// DELETE ITEM BUTTON //////////////

    const [deleteX, setDeleteX] = useState(false);

    const handleDeleteItems = (event) => {
        event.preventDefault();
        setDeleteX(true);
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

    ////////////////// SET ITEMS LIST ////////////////////

    const [categoryItems, setCategoryItems] = useState([])

    useEffect(() => {
    let itemsList = props.items.filter((n) => n.category === props.category);
    setCategoryItems(itemsList)  
      }, []);

    useEffect(() => {
    let itemsList = props.items.filter((n) => n.category === props.category);
    setCategoryItems(itemsList)  
        }, [props.items.length]);

    const handleDeleteItem = (event) => {
        event.preventDefault()
        fetch(props.urlBase + '/item/' + event.target.id, {
            method: "DELETE",
          }).then((response) => response.json());
        props.setDeleteItem(!props.deleteItem)
        setShowMenu(false);
        setDeleteX(false);
    }


    const list = categoryItems.map((item) => {
        return (
            <div className='item-card' key={item._id}>
                <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                {deleteX === false ? (<div></div>):(<h4 onClick={handleDeleteItem} className='delete-icon' id={item._id}>x</h4>)}
                <FontAwesomeIcon onClick={handleAddCart} icon={faCircleCheck} className='add-to-cart' size="3x" style={checkMark == false ? ({color:"#FA5272"}):({color:"#BFC199"})} />
                <div className='card-header'>
                    <h2>{item.title}</h2>
                    <h2>{item.brand} |    <span>${item.price}</span></h2>
                    {/* <h3>${item.price}</h3> */}
                </div>
            </div>
        )
    })

    return (
        <div className='category-box'>
            <div className ='category-header'>
                <h2>{props.category}</h2>
                <FontAwesomeIcon onClick={handleMenu} className="add-icon" icon={faEllipsis} size="2x" style={{color:"#FEFCF5"}}/>
            </div>
            { showMenu == true ? (
                <div className='category-menu'>
                    <button className='category-button' onClick={handleShow}>Add New Item</button>
                    <button className='category-button' onClick={handleDeleteItems}>Delete Item</button>
                    <button className='category-button' id={props.category} onClick={props.handleDeleteCategory}>Delete Category</button>
                </div>
            ):(
                <div></div>
            )}
            {categoryItems.length == 0 ? (
              <div></div>
            ):(<div className='category-items'>{list}</div>)}
            { showModal == true ? (
                <AddItems handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} category={props.category} setItems={props.setItems} items={props.items} />
            ):(
                <div></div>
            )}
        </div>
    )
}

export default CategoryItems;