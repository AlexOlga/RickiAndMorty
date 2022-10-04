import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import About from './components/about';
import ErrorPage from './components/error-page';
import HomePage from 'components/home-page';

function App() {
  return (
    <>
      <header className="App-header">
        <Navigation />
      </header>
      <BrowserRouter basename="/alexolga-REACT2022Q3">
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </BrowserRouter>
    </>
  );
}
export default App;
