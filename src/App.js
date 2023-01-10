import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/Product';
import Products from './pages/Products';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
