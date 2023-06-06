import './app.css';
import RouterAnimate from './components/AnimateRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <RouterAnimate />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
