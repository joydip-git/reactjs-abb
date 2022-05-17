import './App.css';
import ProductDetail from './ProductDetail';

function App() {
  const appElement = (
    <div className="container" style={{ margin: '10px' }}>
      Product Details:
      <br />
      <br />
      <br />
      <ProductDetail />
    </div>
  )
  return appElement
}

export default App;
