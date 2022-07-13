import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductManage from "./pages/ProductManage";
import CreateProduct from "./pages/CreateProduct";
import EditProductDetail from "./pages/EditProductDetail";
import CategoryManage from "./pages/CategoryManage";
import CreateCategory from "./pages/CreateCategory";
import EditCategoryDetail from "./pages/EditCategoryDetail";
// import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productManage" element={<ProductManage />} />
          <Route path="productManage/EditProductDetail/:ProdId" element={<EditProductDetail />} />
          <Route path="productManage/createProduct" element={<CreateProduct />} />
          <Route path="categoryManage" element={<CategoryManage />} />
          <Route path="categoryManage/EditCategoryDetail/:CateId" element={<EditCategoryDetail />} />
          <Route path="categoryManage/newCategory" element={<CreateCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
