
import './main.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ModelProvider from './context/providers/ModelProvider';
import Navbar from './components/Navbar';
import NavProvider from './context/providers/NavProvider';
import Toggle from './components/Toggle';

function App() {

  return (
    <BrowserRouter>
      <ModelProvider>
        <NavProvider>
          <Toggle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavProvider>
      </ModelProvider>
    </BrowserRouter>
  );
}
export default App;
