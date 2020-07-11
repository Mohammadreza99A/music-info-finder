import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Index from './components/layouts/Index';
import TrackInfo from './components/tracks/TrackInfo';

import { ContextController } from './context';

function App() {
  const [darkMode, setDarkMode] = useState(getInitilTheme());

  function changeTheme(mode) {
    setDarkMode(mode);
  }

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitilTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('dark'));
    // const userPreferanceThem = getPreferedTheme();
    return savedTheme || false;
  }

  // function getPreferedTheme() {
  //   if (!window.matchMedia) return;
  //   return window.matchMedia('(prefers-color-scheme: dark)');
  // }

  return (
    <ContextController>
      <Router basename="/">
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Navbar themeMode={darkMode} onChange={changeTheme} />
          <div>
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/info/track/:id" component={TrackInfo}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextController>
  );
}

export default App;
