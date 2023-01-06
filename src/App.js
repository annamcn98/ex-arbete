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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/product' element={Product} ></Route>
          <Route path='/products' element={Products} ></Route>
        </Routes>
      <Footer />
      </BrowserRouter>    
    </div>
  );
}

export default App;
