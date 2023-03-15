import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Portfolio from './components/Portfolio';


const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/portfolio', element: <Portfolio /> },
];

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes routes={routes} />
      </HashRouter>
    </div>
  );
}

export default App;
