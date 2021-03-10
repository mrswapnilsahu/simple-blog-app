import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>Sorry, Page not found</p>
            <img src="404.png" />
            <Link to="/">Go Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;