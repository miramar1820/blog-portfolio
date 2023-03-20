import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase";

const BLOG_DATA = [
  {
    name: "Web",
    title: "WEB разработка",
    items: [
      {
        id: 1,
        title: "How to create sdfkglasdk",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        date: "",
        imageUrl: "https://picsum.photos/id/1/300/400",
      },
      {
        id: 2,
        title: "sdfasHow to create sdfkglasdk",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        date: "",
        imageUrl: "https://picsum.photos/id/2/300/400",
      },
    ],
  },

  {
    name: "Devops",
    title: "Devops",
    items: [
      {
        id: 1,
        title: "How to create sdfkglasdk",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        date: "",
        imageUrl: "https://picsum.photos/id/1/300/400",
      },
      {
        id: 2,
        title: "sdfasHow to create sdfkglasdk",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        date: "",
        imageUrl: "https://picsum.photos/id/2/300/400",
      },
    ],
  },
];

export const PostsContext = createContext({
  posts: {},
  postsCount: 0,
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsCount, setPostsCount] = useState(0);
  useEffect(() => {
    // const addDocs = async () => {
    //   addCollectionAndDocuments("posts", BLOG_DATA);
    // };
    // addDocs();
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setPosts(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { posts, postsCount };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
