import { Route, Routes } from "react-router-dom";
import Post from "../../components/Post/Post";
import PostsList from "../PostsList/PostsList";

const Blog = () => {
  return (
    <Routes>
      <Route index element={<PostsList />} />
      <Route path=":post" element={<Post />} />
    </Routes>
  );
};

export default Blog;
