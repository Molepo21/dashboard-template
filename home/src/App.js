import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Book } from "./components/Book";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import {AddName} from "./components/AddName";
import {AddBook} from "./components/AddBook";
import {UserName} from "./components/UserName";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AddName" element={<AddName />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/UserName" element={<UserName />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
