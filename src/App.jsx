import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { PostsProvider } from "./context/posts";
import Blog from "./routes/Blog/Blog";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import PostsList from "./routes/PostsList/PostsList";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <PostsProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="blog/*" element={<Blog />} />
            </Route>
          </Routes>
        </PostsProvider>
      </main>
    </>
  );
}

export default App;
