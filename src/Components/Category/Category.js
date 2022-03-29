import { useState } from "react";

const Category = (props) => {

    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState(["Wedding", "Vacation"]);



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
                {props.addIcon}
            </div>
        )
    })


    return (
        <div className='category-page'>
            <div className='welcome-box'>
                <h1>What have you been dreaming about?</h1>
            </div>
            <div className='categories'>
                <form className='new-category-form' onSubmit={handleSubmit}>
                  <input onChange={categoryHandleChange} className="text-box" name="category" placeholder="Shopping for..." value={category} type="text" required/>
                <input className="submit-button" type="submit" value="Create New Category"></input>
              </form>
                {categoryList != undefined ? (
                <div className="category-list">{list}</div>
              ):(<div></div>)}
            </div>
        </div>
    )
}

export default Category;