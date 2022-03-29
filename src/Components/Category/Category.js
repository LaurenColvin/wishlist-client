import { useState, useEffect } from "react";

import Login from "../Login/Login";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'


const Category = (props) => {

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


  const fetchData = () => {
      fetch(props.urlBase + "/user/" + props.currentUser )
        .then((response) => response.json())
        .then((data) => setUserData(data.user))
        // .then(() => setCategoryList(userData.categories))
  }

  useEffect(() => {
      fetchData()
      console.log(props.currentUser)
    }, []);

  // useEffect(() => {
  //     fetchData()
  // }, [showModal]);


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
      setCategoryList(categoriesCopy)
      setCategory("");
      console.log(category)
  };

  const list = categoryList.map((category) => {
      return (
          <div className='category-box'>
              <h2>{category}</h2>
              <FontAwesomeIcon className="add-icon" icon={faCirclePlus} size="2x" style={{color:"#FA5272"}}/>
          </div>
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
              {categoryList != undefined ? (
              <div className="category-list">{list}</div>
            ):(<div></div>)}
          </div>
          )}
          { showModal == true ? (
              <Login handleClose={handleClose} urlBase={props.urlBase} currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
          ):(
              <div></div>
          )}
      </div>
  )
}

export default Category;