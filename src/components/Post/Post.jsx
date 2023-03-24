import { useParams } from "react-router-dom";

const Post = () => {
  const { post } = useParams();
  return <div>Post {post}</div>;
};

export default Post;
