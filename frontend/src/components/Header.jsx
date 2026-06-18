import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <section className="home-header">
            <h1>Smart Students</h1>
            <nav>
                <Link to="/login" className="link">Login</Link>   
                <p>or</p>
                <Link to="/register" className='link'>Register</Link>
            </nav>
        </section>
    )
}