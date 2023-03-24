import { useContext, useState } from "react";
import PostPreview from "../../components/PostPreview/PostPreview";
import { PostsContext } from "../../context/posts";
import { Pagination } from "@mui/material";
import usePagination from "../../hooks/usePagination";
import "./PostsList.scss";

const PostsList = () => {
  const { posts, postsCount, postsLoading } = useContext(PostsContext);
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(postsCount / PER_PAGE);
  const _DATA = usePagination(posts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      {postsLoading ? (
        <div>Loading...</div>
      ) : (
        _DATA.currentData().map((post) => <PostPreview post={post} key={post.id} />)
      )}
      {(postsCount >= PER_PAGE) && <Pagination
        count={count}
        size="large"
        page={page}
        
        shape="rounded"
        color="primary"
        onChange={handleChange}
      />}
      
    </>
  );
};

export default PostsList;
