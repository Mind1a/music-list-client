import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import AddMusic from "./pages/AddMusic";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="flex justify-center">
          <div className="w-full max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/add" element={<AddMusic />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
