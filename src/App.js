import logo from './logo.svg';
import Sidebar from './components/sidebar';
import Routing from './routes';
import Internal from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    </div>
  );
}

export default App;
