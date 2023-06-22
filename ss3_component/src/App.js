import logo from './logo.svg';
import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import {ListPosts} from "./component/ListPost";
import React from "react";
import {CreatePost} from "./component/CreatePost";
import {UpdatePost} from "./component/UpdatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPosts/>}/>
        <Route path="create-post" element={<CreatePost/>}/>
        <Route path="update-post/:id" element={<UpdatePost/>}/>
      </Routes>
      </>
  );
}

export default App;
