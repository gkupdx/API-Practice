//// App.js

import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Docs from './components/Docs/Docs';
import CardList from './components/CardList/CardList';
import ApiPage from './components/ApiPage/ApiPage';
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
            <Docs />
            <CardList />
            <Footer />
          </>
        } />
        { /* API INDEX route */ }
        <Route path='/api-list' element={
          <>
            <Navbar />
            <ApiPage />
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
