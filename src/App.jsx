import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { PostsProvider } from "./context/posts";
import Blog from "./routes/Blog/Blog";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <PostsProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              {/* <section className="content"> */}
              <Route index element={<Blog />} />
              {/* </section> */}
            </Route>
          </Routes>
        </PostsProvider>
      </main>
    </>
  );
}

export default App;
