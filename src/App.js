import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Index from './components/layouts/Index';
import TrackInfo from './components/tracks/TrackInfo';

import { ContextController } from './context';

function App() {
  return (
    <ContextController>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/info/track/:id" component={TrackInfo}></Route>
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </ContextController>
  );
}

export default App;
