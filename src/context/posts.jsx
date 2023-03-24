import { createContext, useEffect, useState } from "react";
import { addDocuments, getAllDocuments } from "../utils/firebase";

const CATEGORIES = [
  { title: "WEB разработка", description: "Web development, etc." },
  { title: "Linux", description: "Linux administration, etc." },
];

const BLOG_DATA = [
  {
    title: "How to create sdfkglasdk",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    date: "",
    imageUrl: "https://picsum.photos/id/1/300/400",
  },
  {
    title: "sdfasHow to create sdfkglasdk",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    date: "",
    imageUrl: "https://picsum.photos/id/2/300/400",
  },
];

export const PostsContext = createContext({
  posts: [],
  postsCount: 0,
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsCount, setPostsCount] = useState(0);
  const [postsLoading, setPostsLoading] = useState(true);
  useEffect(() => {
    // const addDocs = async () => {
    //   addDocuments("categories", CATEGORIES);
    // };
    // addDocs();

    // const getCategoriesMap = async () => {
    //   const categoryMap = await getCategoriesAndDocuments();
    //   console.log(categoryMap);
    //   setPosts(categoryMap);
    // };
    // getCategoriesMap();

    const getAllPosts = async () => {
      const postsArray = await getAllDocuments("posts");
      // console.log(postsArray);
      setPosts(postsArray);
      setPostsLoading(false);
      setPostsCount(postsArray.length);
    };
    getAllPosts();
  }, []);
  const value = { posts, postsCount, postsLoading };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
