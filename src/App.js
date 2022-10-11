//// App.js

import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CardList from './components/CardList/CardList';
import ApiList from './components/ApiList/ApiList';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        { /* HOMEPAGE route */ }
        <Route path='/' element={
          <>
            <Navbar />
            <HeroBanner />
            <CardList />
            <Footer />
          </>
        } />
        { /* API INDEX route */ }
        <Route path='/api-list' element={
          <>
            <Navbar />
            <ApiList />
            <Footer />
          </>
        } />
        { /* ABOUT route */ }
        <Route path='/about' element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
