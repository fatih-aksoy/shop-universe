import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import FavoritesPages from "./pages/FavoritesPages";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, Zoom } from "react-toastify";
import Login from "./pages/Login";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-red-200 min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPages />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
      <ToastContainer transition={Zoom} />
    </div>
  );
}

export default App;
