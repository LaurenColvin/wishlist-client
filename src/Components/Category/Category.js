import { useState } from "react";

const Category = () => {

    const [showForm, setShowForm] = useState(false);
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);

    const handleShow = () => setShowForm(true);

    const categoryHandleChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
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
            </div>
        )
    })


    return (
        <div className='category-page'>
            <div className='welcome-box'>
                <h1>What have you been dreaming about?</h1>
            </div>
            <div className='categories'>
                <button onClick={handleShow}>Create New Category</button>
                {showForm == true? (
                <form className='new-category-form' onSubmit={handleSubmit}>
                  <input onChange={categoryHandleChange} name="category" placeholder="Shopping for..." value={category} type="text" required/>
                <input className="submit-button" type="submit"></input>
              </form>
              ):(<div></div>)}
                {categoryList != undefined ? (
                <div className="category-list">{list}</div>
              ):(<div></div>)}
            </div>
        </div>
    )
}

export default Category;