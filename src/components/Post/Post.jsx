import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return <div>Post {params}</div>;
};

export default Post;
