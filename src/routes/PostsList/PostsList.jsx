import { useContext } from "react";
import { PostsContext } from "../../context/posts";

const PostsList = () => {
  const { posts, postsCount } = useContext(PostsContext);
  console.log(posts);
  return (
    <>
      {/* {posts.map((post) => {
        <article className="article box" key={post.id}>
          <div className="article__heading">
            <a href="/article.html">
              <img
                src="./assets/article2.jpg"
                alt=""
                className="article__img"
              />
            </a>
          </div>
          <div className="article__data">
            <a href="/article.html" className="article__title">
              Lorem ipsum dolor sit amet.
            </a>
            <p className="article__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              dolor, adipisci doloremque officia fuga quia, laboriosam
              recusandae sunt aliquam rem magnam voluptate esse ratione! Eum
              facere ipsum nesciunt et molestias! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam, dolor.
            </p>
            <div className="article__additional">
              <small className="date">20.02.2023</small>
              <a href="#" className="category">
                <span className="circle"></span>
                <small>website creating</small>
              </a>
            </div>
          </div>
        </article>;
      })} */}
    </>
  );
};

export default PostsList;
