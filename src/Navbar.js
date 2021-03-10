import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="brand-logo">
				<h1>Blog App</h1>
			</div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">Add Blog</Link>
				<Link to="/blogs">Blogs</Link>
			</div>
		</div>
	);
};

export default Navbar;
