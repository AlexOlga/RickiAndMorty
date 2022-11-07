import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import About from './components/about';
import FormsPage from './components/forms-page';
import ErrorPage from './components/error-page';
import HomePage from 'components/home-page';
import CardPage from 'components/cardPage/cardPage';
import { TGlobalState } from 'types';
// import { reducer, defaultState, AppContext } from 'reducer';

function App() {
  // const [state, dispatch] = useReducer(reducer, defaultState);
  const [title, setTitle] = useState(<></>);

  const currentPosition = useSelector((state: TGlobalState) => state.search.currentPosition);
  const searchResults = useSelector((state: TGlobalState) => state.search.searchResults);

  useEffect(() => {
    if (currentPosition && searchResults) {
      const character = searchResults.find((item) => item.id === currentPosition);
      if (character !== undefined) setTitle(<h2 className="character-title">{character.name}</h2>);
    } else setTitle(<></>);
  }, [currentPosition]);

  return (
    <>
      <header className="App-header">
        <Navigation />
        {title}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards/:cardId" element={<CardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
