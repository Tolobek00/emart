import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import HomePages from "./Pages/HomePages";




function App() {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
