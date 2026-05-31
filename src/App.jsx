import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart.jsx";


function App() {
  // Step 1: Cart state
  const [cartItems, setCartItems] = useState([]);

  // Step 2: Function to add items
function addToCart(product) {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.name === product.name);
    if (existingItem) {
      return prevItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
}

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass addToCart into Products */}
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pass cartItems into Cart */}
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
/>


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

