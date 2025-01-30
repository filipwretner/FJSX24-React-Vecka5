import { useParams } from "react-router-dom";

function BlogDetails() {
    const { blogId } = useParams();
    return (
        <div>
            <h3>Blog Post { blogId }</h3>
            <p>Här kommer information om inlägget med ID: {blogId}</p>
        </div>
    );
}