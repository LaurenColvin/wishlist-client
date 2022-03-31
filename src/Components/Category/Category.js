import { useState, useEffect } from "react";

import Login from "../Login/Login";
import CategoryItems from "../CategoryItems/CategoryItems";

import './Category.css'

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
  const [categoryList, setCategoryList] = useState(['wedding', 'vacation', 'workout']);
  const [items, setItems] = useState([
    {
      "_id": "62421836778dcd2834acea14",
      "category": "wedding",
      "title": "Claire Midi Dress",
      "brand": "Show Me Your Mumu",
      "price": 188,
      "link": "https://showmeyourmumu.com/collections/mumu-weddings-for-the-guest/products/claire-midi-dress-sky-blue-ditsy?variant=39448287182891&shop_type=bridal",
      "imgUrl": "https://cdn.shopify.com/s/files/1/2203/5897/products/MM1-5082_PU99_01_1_1440x.progressive.jpg?v=1641425581",
      "__v": 0
      },
      {
      "_id": "62438cd03fa5a2258ee3a500",
      "category": "vacation",
      "title": "Crochet Hat",
      "brand": "Sensi Studio",
      "price": 136,
      "link": "https://www.revolve.com/sensi-studio-seashells-crochet-hippie-hat/dp/SENR-WA20/?d=Womens&page=1&lc=32&itrownum=8&itcurrpage=1&itview=05",
      "imgUrl": "https://is4.revolveassets.com/images/p4/n/z/SENR-WA20_V3.jpg",
      "__v": 0
      },
      {
      "_id": "62438d6a3fa5a2258ee3a50d",
      "category": "vacation",
      "title": "Naomi Dress",
      "brand": "LSpace",
      "price": 139,
      "link": "https://www.revolve.com/lspace-naomi-dress/dp/LSPA-WD189/?d=Womens&page=1&lc=4&itrownum=1&itcurrpage=1&itview=05",
      "imgUrl": "https://is4.revolveassets.com/images/p4/n/z/LSPA-WD189_V1.jpg",
      "__v": 0
      },
      {
      "_id": "624398a13fa5a2258ee3a5a7",
      "category": "wedding",
      "title": "Verona Cowl Dress",
      "brand": "Show Me Your Mumu",
      "price": 168,
      "link": "https://showmeyourmumu.com/collections/mumu-weddings-for-the-guest/products/verona-cowl-dress-moss-green-luxe-satin?variant=39877222039595&shop_type=bridal",
      "imgUrl": "https://cdn.shopify.com/s/files/1/2203/5897/products/springbridal_resortswim_bri_11.2027880_1440x.progressive.jpg?v=1618002353",
      "__v": 0
      },
      {
      "_id": "6243d67e572f3db95bed4ea3",
      "category": "wedding",
      "title": "Reese Ruffle Dress",
      "brand": "Show Me Your Mumu",
      "price": 198,
      "link": "https://showmeyourmumu.com/collections/mumu-weddings-for-the-guest/products/reese-ruffle-dress-emerald-chiffon?variant=39578543587371&shop_type=bridal",
      "imgUrl": "https://cdn.shopify.com/s/files/1/2203/5897/products/BS2-0527_ER24_01_2_1440x.progressive.jpg?v=1639441819",
      "__v": 0
      },
      {
      "_id": "6243d6de572f3db95beda7dc",
      "category": "vacation",
      "title": "Bali Bottom",
      "brand": "Show Me Your Mumu",
      "price": 78,
      "link": "https://showmeyourmumu.com/collections/new-mu/products/bali-bottom-tropics-palm",
      "imgUrl": "https://cdn.shopify.com/s/files/1/2203/5897/products/MMS2-225_WP72_01_4_1440x.progressive.jpg?v=1648080640",
      "__v": 0
      },
      {
        "_id": "6245d96bb897b39525e572d4",
        "category": "workout",
        "title": "New Heights Top",
        "brand": "Lspace",
        "price": 110,
        "link": "https://www.lspace.com/collections/active/products/new-heights-top?variant=39678187601982",
        "imgUrl": "https://cdn.shopify.com/s/files/1/1102/4588/products/ANEHTP22_ANEHSH22_JPS_S_6_594ddca0-edce-47e5-8830-adbca4fb3f6d_1024x1024.jpg?v=1644279474",
        "__v": 0
        },
        {
        "_id": "6245d990b897b39525e572df",
        "category": "workout",
        "title": "New Heights Short",
        "brand": "Lspace",
        "price": 110,
        "link": "https://www.lspace.com/products/new-heights-short?variant=39678193696830",
        "imgUrl": "https://cdn.shopify.com/s/files/1/1102/4588/products/ANEHTP22_ANEHSH22_JPS_S_1_e76f6570-4edf-44ef-bfc7-583f584fe7c2_1024x1024.jpg?v=1644282903",
        "__v": 0
        },
        {
        "_id": "6245d9d8b897b39525e572ea",
        "category": "workout",
        "title": "One Shoulder Dress",
        "brand": "Outdoor Voices",
        "price": 100,
        "link": "https://www.outdoorvoices.com/products/w-one-shoulder-dress-with-liner?variant=39709132095566",
        "imgUrl": "https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9vbmUtc2hvdWxkZXItZHJlc3Mtd2l0aC1ib2R5c3VpdC9sYXZlbmRlci9XNDAxNzg5LUJJVC1MVkRfT25lX1Nob3VsZGVyX0RyZXNzX0xhdmVuZGVyXzAwNjYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsImhlaWdodCI6MTAwMDAsIndpZHRoIjo5MDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=",
        "__v": 0
        }
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [wardrobeItems, setWardrobeItems] = useState([]);
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
    if (userData.wardrobeItems != undefined) {
      setWardrobeItems(userData.wardrobeItems)
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
        <CategoryItems urlBase={props.urlBase} currentUser={props.currentUser} setItems={setItems} items={items} category={category} key={index} editItem={editItem} setEditItem={setEditItem} handleDeleteCategory={handleDeleteCategory} cartItems={cartItems} setCartItems={setCartItems} wardrobeItems={wardrobeItems}/>
    )
  })
 


  return (
      <div className='category-page'>
          <div className='welcome-box'>
              <h1>What have you been dreaming about?</h1>
          </div>
          { props.currentUser == "" ? (
              <div className='no-user' >
                  <button onClick={handleShow} className='login-category'>Login to add categories of your own!</button>
                  <h2>Trending Categories:</h2>
                  <div className="category-list">{list}</div>
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