import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"

//pagelayout component contains the header and footer that apears on all pages of under / and its children
import Pagelayout from "./components/Pagelayout/Pagelayout";

//import chidlren pages of /
import Membership from "./pages/Membership";
import BrowseMovies from "./pages/bookTickets/browseMovies";
import BrowseMovie from "./pages/bookTickets/browseMovie"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Test from "./pages/Test";


export default function App() {

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route>
          <Route path="/" element={<Pagelayout><Home /></Pagelayout>} />
          <Route path="/membership" element={<Pagelayout><Membership /></Pagelayout>} />
          <Route path="/browse-movie" element={<Pagelayout><BrowseMovies /></Pagelayout>} />
          <Route path="/contact-us" element={<Pagelayout><ContactUs /></Pagelayout>} />
          <Route path="/about-us" element={<Pagelayout><AboutUs /></Pagelayout>} />
          <Route path="/test" element={<Pagelayout><Test /></Pagelayout>} />
        </Route>
        <Route>
          <Route path="/browse-movie/:title" element={<Pagelayout><BrowseMovie /></Pagelayout>} />
        </Route>
        <Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}
