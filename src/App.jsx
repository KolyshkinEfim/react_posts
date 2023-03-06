import React, { useRef, useState } from "react";
import PostsList from "./components/PostsList";
import "./styles/app.css";
import StyledButton from "./components/UI/buttons/StyledButton";
import StyledInput from "./components/UI/inputs/StyledInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "About JS", body: "descr" },
    { id: 2, title: "About JSx", body: "descr22" },
    { id: 3, title: "About tS", body: "descr1" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "About c#", body: "descr" },
    { id: 2, title: "About asp", body: "descr22" },
    { id: 3, title: "About wpf", body: "descr1" },
  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <div className="app">
      <form action="submit">
        <StyledInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <StyledInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <StyledButton onClick={addNewPost}>Добавить</StyledButton>
      </form>

      <PostsList posts={posts} title={"Список постов 1"} />
      <PostsList posts={posts2} title={"Список постов 2"} />
    </div>
  );
}

export default App;
