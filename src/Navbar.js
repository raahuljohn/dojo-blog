import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1256d',
                    borderRadius: '10px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;