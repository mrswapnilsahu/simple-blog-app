import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	const [ author, setAuthor ] = useState('Harsh');
	const [ isPending, setIsPending ] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("submitted");
		const blog = { title, body, author };
		// console.log(blog);
		setIsPending(true);
		fetch('http://localhost:5000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			setIsPending(false);
			console.log('Blog Added!');
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a new Blog!</h2>
			<form onSubmit={handleSubmit}>
				<label>Title: </label>
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
				<label>Body: </label>
				<textarea value={body} onChange={(e) => setBody(e.target.value)} required />
				<label>Author: </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)} required>
					<option value="Harsh">Harsh</option>
					<option value="Swapnil">Swapnil</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Wait Adding Blog...</button>}
				{/* 				<p>{title}</p>
				<p>{body}</p>
				<p>{author}</p> */}
			</form>
		</div>
	);
};

export default Create;
