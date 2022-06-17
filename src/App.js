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
      <About />
      <Interests />
      <Footer />
    </div>
    </div>
  );
}

export default App;
