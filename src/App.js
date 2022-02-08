import './App.css';
import Header from './containers/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import CartItems from "./containers/CartItems"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
