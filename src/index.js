import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './app';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Projects from "./components/Projects";
import MyWork from "./components/MyWork";

const routing = (
    <Router>
      <div className="App">
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/greeting" component={Greeting} />
          <Route exact path="/my-work" component={MyWork} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route component={Notfound} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
);





ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
