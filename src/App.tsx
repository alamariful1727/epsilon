import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Dashboard } from './pages/dashboard';
import { Home } from './pages/home';
import { NoMatch } from './pages/NoMatch';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';

const App = () => {
  return (
    <Router>
      <div className="antialiased h-screen flex flex-col">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
