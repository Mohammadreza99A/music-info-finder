import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Importing components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Index from './components/layouts/Index';
import TrackInfo from './components/tracks/TrackInfo';
import NotFoundPage from './components/NotFoundPage';
import About from './components/About';

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
    return savedTheme || false;
  }

  return (
    <ContextController>
      <Router basename="/">
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Helmet>
            <title>Music Info Finder | Home</title>
          </Helmet>
          <Navbar onChange={changeTheme} darkMode={darkMode} />
          <div>
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/info/track/:id" component={TrackInfo}></Route>
              <Route exact path="/about" component={About} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextController>
  );
}

export default App;
