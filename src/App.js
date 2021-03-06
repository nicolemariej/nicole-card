import './App.css';
import Info from './info';
import About from './about';
import Footer from './footer';
import Interests from './interests';

function App() {
  return (
    <div className="App">
      <div className="container">
        
      <Info />
      <div className="written-content">
      <About />
      <Interests />
      </div>
      <Footer />
      
    </div>
    </div>
  );
}

export default App;
