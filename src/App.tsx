import './scss/app.scss';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import FullProduct from './Components/FullProduct/FullProduct';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<FullProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
