import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ListPost} from "./component/ListPost";
import {CreatePost} from "./component/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost/>}/>
        <Route path="create" element={<CreatePost/>}/>
      </Routes>
      </>
  );
}

export default App;
