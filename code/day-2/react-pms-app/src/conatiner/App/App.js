//import Main from '../../Main';
import ProductContainer from '../products/ProductContainer';
import './App.css';

function App() {
  console.log('[App] rendered')
  return (
    <div className='container'>
      <ProductContainer />
      {/* <Main /> */}
    </div>
  );
}

export default App;
