import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
    const {data:blog,isPending,error} = useFetch('http://localhost:5000/blogs/'+id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:5000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
            console.log("delete clicked");
        });
    }

	return (
		<div className="blog-details">
			{/* <h2>Blog Details - {id}</h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>DELETE</button>
                </article>
            )}
		</div>
	);
};

export default BlogDetails;
