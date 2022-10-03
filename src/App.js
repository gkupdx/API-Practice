import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
