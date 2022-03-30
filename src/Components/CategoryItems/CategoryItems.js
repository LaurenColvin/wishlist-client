import { useState, useEffect } from 'react'

import AddItems from '../AddItems/AddItems'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'


const CategoryItems = (props) => {

    ////////////////// ADD ITEMS MODAL //////////////////

    const [showModal, setShowModal] = useState(false);

    const handleShow = (event) => {
        event.preventDefault();
        setShowModal(true);
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

    const handleDelete = (event) => {
        event.preventDefault()
        fetch(props.urlBase + '/item/' + event.target.id, {
            method: "DELETE",
          }).then((response) => response.json());
        props.setDeleteItem(!props.deleteItem)
    }

    const list = categoryItems.map((item) => {
        return (
            <div className='item-card' key={item._id}>
                <div className='card-header'>
                    <h2>{item.title}</h2>
                    <h2 onClick={handleDelete} className='delete-icon' id={item._id}>x</h2>
                </div>
                <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                <h2>{item.brand}</h2>
                <h3>${item.price}</h3>
            </div>
        )
    })

    return (
        <div className='category-box'>
            <h2>{props.category}</h2>
            <FontAwesomeIcon onClick={handleShow} className="add-icon" icon={faCirclePlus} size="2x" style={{color:"#FA5272"}}/>
            {categoryItems.length == 0 ? (
              <div></div>
            ):(<div className="category-items">{list}</div>)}
            <button>Compare Items</button>
            { showModal == true ? (
                <AddItems handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} category={props.category} setItems={props.setItems} items={props.items} />
            ):(
                <div></div>
            )}
        </div>
    )
}

export default CategoryItems;