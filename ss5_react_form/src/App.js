import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {PostList} from "./component/PostList";
import {CreatePost} from "./component/CreatePost";
import {DetailPost} from "./component/DetailPost";
import {UpdatePost} from "./component/UpdatePost";

function App() {
  return (
   <>
     <Routes>
       <Route path="/" element={<PostList/>}/>
       <Route path="/create-post" element={<CreatePost/>}/>
       <Route path="/detail/:id" element={<DetailPost/>}/>
       <Route path="update/:id" element={<UpdatePost/>}/>
     </Routes>
     </>
  );
}

export default App;
