import React, { useEffect, useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import About from './components/about';
import FormsPage from './components/forms-page';
import ErrorPage from './components/error-page';
import HomePage from 'components/home-page';
import CardPage from 'components/cardPage/cardPage';
import { reducer, defaultState, AppContext } from 'reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [title, setTitle] = useState(<></>);
  useEffect(() => {
    if (state.currentPosition && state.searchResults) {
      const character = state.searchResults.find((item) => item.id === state.currentPosition);
      if (character !== undefined) setTitle(<h2 className="character-title">{character.name}</h2>);
    } else setTitle(<></>);
  }, [state.currentPosition]);

  return (
    <>
      <header className="App-header">
        <Navigation />
        {title}
      </header>
      <AppContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards/:cardId" element={<CardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}
export default App;
