import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Shop Smarter,<br/> Not Harder.</h1>
            <Link className='button' to='/category'>Start Dreaming</Link>
        </div>
    )
}

export default Home;