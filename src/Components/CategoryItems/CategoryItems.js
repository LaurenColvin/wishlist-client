import { useState, useEffect } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'

const CategoryItems = (props) => {

    const [categoryItems, setCategoryItems] = useState([])

    useEffect(() => {
    let itemsList = props.items.filter((n) => n.category === props.category);
    setCategoryItems(itemsList)  
      }, []);

    const list = categoryItems.map((item) => {
        return (
            <div className='item-card' key={item._id}>
                <h2>{item.title}</h2>
                <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                <h2>{item.brand}</h2>
                <h3>${item.price}</h3>
            </div>
        )
    })

    return (
        <div className='category-box'>
            <h2>{props.category}</h2>
            <FontAwesomeIcon className="add-icon" icon={faCirclePlus} size="2x" style={{color:"#FA5272"}}/>
            {categoryItems.length == 0 ? (
              <div></div>
            ):(<div className="category-items">{list}</div>)}
        </div>
    )
}

export default CategoryItems;