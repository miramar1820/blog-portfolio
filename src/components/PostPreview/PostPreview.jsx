import { Link } from "react-router-dom";

const PostPreview = ({ post }) => {
  return (
    <article className="article box" key={post.id}>
      <div className="article__heading">
        <Link to={post.id}>
          <img src={post.imageUrl} alt={post.title} className="article__img" />
        </Link>
      </div>
      <div className="article__data">
        <Link to={post.id} className="article__title">
          {post.title}
        </Link>
        <p className="article__text">{post.body}</p>
        <div className="article__additional">
          <small className="date">20.02.2023</small>
          <Link to={`categories/${post.categoryId}`} className="category">
            <span className="circle"></span>
            <small>{post.categoryId}</small>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
