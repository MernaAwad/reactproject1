import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import CreatePosts from "./pages/CreatePosts";
import PostDetails from "./pages/PostDetails";
// import PostAuthor from "./Components/PostAuthor";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/UserPosts" element={<Projects />} />
        <Route path="/postdetails" element={<PostDetails />} />
        <Route path="/postdetails" element={<PostDetails />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<CreatePosts />} />
        {/* <Route path="/author" element={<PostAuthor/>} /> */}
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
