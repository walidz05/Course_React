
import './main.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ModelProvider from './context/providers/ModelProvider';

function App() {

  return (
    <BrowserRouter>
      <ModelProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModelProvider>
    </BrowserRouter>
  );
}
export default App;
