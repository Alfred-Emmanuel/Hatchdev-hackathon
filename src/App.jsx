import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Products from './pages/Products';
import Brands from './pages/Brands';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/product_list" element={<ProductList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );

}

export default App
