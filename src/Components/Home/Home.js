import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='hero-image'>
                <h1>Shop Smarter,<br/> Not Harder.</h1>
                <Link className='button' to='/category'>Start Dreaming</Link>
            </div>
            <div className='trending'>
                <h2>Popular Categories</h2>
                <div className='category-container'>
                    <div className='trending-category'>
                        <h3>Wedding Guest Dress</h3>
                    </div>
                    <div className='trending-category'>
                        <h3>Vacation Swim Suit</h3>
                    </div>
                    <div className='trending-category'>
                        <h3>Classic Work Blazer</h3>
                    </div>
                </div>
            </div>
            <div className='instructions'>
                <h2>How to use <span>Wishlist</span></h2>
                <div className='instructions-container'>
                    <div className='rule'>
                        <h3>1.</h3>
                        <h4>Create a category</h4>
                    </div>
                    <div className='rule'>
                        <h3>2.</h3>
                        <h4>Add items from different brands</h4>
                    </div>
                    <div className='rule'>
                        <h3>3.</h3>
                        <h4>Use our filtering system to compare</h4>
                    </div>
                    <div className='rule'>
                        <h3>4.</h3>
                        <h4>Add to cart and check your budget for the month</h4>
                    </div>
                    <div className='rule'>
                        <h3>5.</h3>
                        <h4>Track your purchses in my wardrobe</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;