import { useState, useEffect } from "react";

import Login from "../Login/Login";
import CategoryItems from "../CategoryItems/CategoryItems";


const Category = (props) => {

  const fetchData = () => {
    if (props.currentUser != "") {
      fetch(props.urlBase + "/user/" + props.currentUser )
        .then((response) => response.json())
        .then((data) => setUserData(data.user))
    }
}

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
  const [categoryList, setCategoryList] = useState([]);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [editItem, setEditItem] = useState(false)

  useEffect(() => {
      fetchData()
    }, []);

  useEffect(() => {
      fetchData()
    }, [showModal]);

  useEffect(() => {
      fetchData()
    }, [editItem]);

  useEffect(() => {
    if (userData.categories != undefined) {
      setCategoryList(userData.categories)
    }
    if (userData.wishlistItems != undefined) {
      setItems(userData.wishlistItems)
    }
    if (userData.cartItems != undefined) {
      setCartItems(userData.cartItems)
    }
  }, [userData])

  //////////////// SET CATEGORIES //////////////////

  const [category, setCategory] = useState("");



  const categoryHandleChange = (event) => {
      event.preventDefault();
      setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      const categoriesCopy = [...categoryList];
      categoriesCopy.push(category);
      setCategoryList(categoriesCopy);
      let data = {
        categories: categoriesCopy,
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
        .then((data) => console.log(data));
      setCategory("");
      console.log(category)
  };

  ////////////// EDIT CATGORY LIST /////////////////////

  const handleDeleteCategory = (event) => {
    event.preventDefault()
    const categoriesFilter = categoryList.filter((n) => n != event.target.id)
    let data = {
      categories: categoriesFilter,
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
      .then((data) => console.log(data));
    setEditItem(!editItem)
}



  const list = categoryList.map((category, index) => {
    return (
        <CategoryItems urlBase={props.urlBase} currentUser={props.currentUser} setItems={setItems} items={items} category={category} key={index} editItem={editItem} setEditItem={setEditItem} handleDeleteCategory={handleDeleteCategory} cartItems={cartItems} setCartItems={setCartItems}/>
    )
  })
 


  return (
      <div className='category-page'>
          <div className='welcome-box'>
              <h1>What have you been dreaming about?</h1>
          </div>
          { props.currentUser == "" ? (
              <div className='login-container'>
                  <button onClick={handleShow}>Login</button>
              </div>
          ):(
          <div className='categories'>
              <form className='new-category-form' onSubmit={handleSubmit}>
                <input onChange={categoryHandleChange} className="text-box" name="category" placeholder="Shopping for..." value={category} type="text" required/>
              <input className="submit-button" type="submit" value="Create New Category"></input>
            </form>
            {categoryList.length == 0 ? (
              <div></div>
            ):(<div className="category-list">{list}</div>)}
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

export default Category;