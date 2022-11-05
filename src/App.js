import { useState } from "react";
import "./App.css";
import AddWish from "./components/AddWish";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import WishList from "./components/WishList";
import { WishProvider } from "./context/WishContext";

function App() {
  return (
    <div className="App">
      <WishProvider>
        <Nav />
        <AddWish />
        <WishList/>
      </WishProvider>
      <Footer />
    </div>
  );
}

export default App;
