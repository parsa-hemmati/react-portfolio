import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Portfolio from './components/Portfolio';


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/portfolio', element: <Portfolio /> },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;
