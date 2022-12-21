import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ProductList/>} />
            <Route path="/product/:productId" exact element={<ProductDetail/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
