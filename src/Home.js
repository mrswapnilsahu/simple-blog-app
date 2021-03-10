import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
	/* const [ blogs, setBlogs ] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
		{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
	]); */

	/* const [ blogs, setBlogs ] = useState(null);

	// const [ name, setName ] = useState('swapnil');
	const [ isPending, setIsPending ] = useState(true);
	const [ error, setError ] = useState(null); */

	// Destructuring data coming from custom HOOK
	const { data: blogs, isPending, error } = useFetch('http://localhost:5000/blogs');

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		// setBlogs(newBlogs);
	};
	

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs!" /> */}
			{/* <button onClick={() => setName('Harsh')}>Change Name</button> */}
			{/* <p>{name}</p> */}
		</div>
	);
};

export default Home;
