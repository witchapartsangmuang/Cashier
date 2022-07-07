import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
