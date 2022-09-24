
import './main.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ModelProvider from './context/providers/ModelProvider';
import Navbar from './components/Navbar';
import NavProvider from './context/providers/NavProvider';
import Toggle from './components/Toggle';
import DestinationProvider from './context/providers/DestinationProvider';
import DetailsDestination from './pages/DetailsDestination';
import ServicesProvider from './context/providers/ServicesProvider';

function App() {

  return (
    <BrowserRouter>
      <ModelProvider>
        <NavProvider>
          <DestinationProvider>
            <ServicesProvider>
              <Toggle />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details/:id" element={<DetailsDestination />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ServicesProvider>
          </DestinationProvider>
        </NavProvider>
      </ModelProvider>
    </BrowserRouter>
  );
}
export default App;
