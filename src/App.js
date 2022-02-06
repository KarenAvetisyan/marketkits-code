import './App.css';
import Footer from './components/footer';
import Header from "./components/header";
import Home from './pages/Home';

function App() {
  return (
    <div className='wrapper'>
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
