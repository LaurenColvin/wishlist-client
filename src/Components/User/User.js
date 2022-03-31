import { useState, useEffect } from "react";
import Login from "../Login/Login";

import './User.css'

const User = (props) => {

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
    const [wardrobeItems, setWardrobeItems] = useState([])
    const [archiveItems, setArchiveItems] = useState([])

    const fetchData = () => {
        fetch(props.urlBase + "/user/" + props.currentUser )
          .then((response) => response.json())
          .then((data) => setUserData(data.user));
    }

    useEffect(() => {
        fetchData()
        console.log(props.currentUser)
      }, []);

    useEffect(() => {
    if (userData.wardrobeItems != undefined) {
        setWardrobeItems(userData.wardrobeItems)
    }
    if (userData.archiveItems != undefined) {
        setArchiveItems(userData.archiveItems)
    }
    }, [userData])

    useEffect(() => {
        fetchData()
    }, [showModal]);

    //////////////////// MAP THROUGH WARDROBE AND ARCHIVE ITEMS ////////////////////


    const wardrobeList = wardrobeItems.map((item) => {

        return (
                <div className='item-card'>
                    <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
                    <h4  className='delete-icon' id={item._id}>x</h4>
                    <div className='card-header'>
                        <h2>{item.title}</h2>
                        <h2>{item.brand} |    <span>${item.price}</span></h2>
                    </div>
                </div>
        )
    })

    // const archiveList = archiveItems.map((item) => {

    //     return (
    //             <div className='item-card'>
    //                 <a href={item.link} target='_blank'><img className='item-image' src={item.imgUrl} alt={item.title}/></a>
    //                 <h4 className='delete-icon' id={item._id}>x</h4>
    //                 <div className='card-header'>
    //                     <h2>{item.title}</h2>
    //                     <h2>{item.brand} |    <span>${item.price}</span></h2>
    //                 </div>
    //             </div>
    //     )
    // })




    return (
        <div className='user-page'>
            <div className='user-box'>
                <h1>Shop Smarter, Not Harder!</h1>
            </div>
            { props.currentUser == "" ? (
                <div className='login-container'>
                    <button onClick={handleShow} className='login-container-button'>Login</button>
                </div>
            ):(
                <div>
                    <div className='user-header'>
                        <h1>Welcome {userData.firstName}</h1>
                        <button onClick={handleShow}>Switch User</button>
                    </div>
                    <div className='wardrobe-container'>
                        <h1>My Wardrobe</h1>
                        <div className='wardrobe'>
                            {wardrobeList}
                        </div>
                    </div>
                    {/* <div>
                        <h1>Archived Items</h1>
                        <div>
                            {archiveList}
                        </div>
                    </div> */}
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

export default User;