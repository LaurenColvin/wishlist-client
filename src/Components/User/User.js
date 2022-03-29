import { useState, useEffect } from "react";

const User = (props) => {

    useEffect(() => {
        fetch(props.urlBase + "/user/" + props.currentUser )
          .then((response) => response.json())
          .then((data) => console.log(data.user));
      }, []);

    return (
        <div className='user-page'>
            <h1>Please login to see your wishlist and wardrobe</h1>
            <button>Start Dreaming</button>
        </div>
    )
}

export default User;