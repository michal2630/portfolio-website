import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope);

const App = () => {

    return (
     <React.Fragment>
          <Navbar />
          <div className="app-wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/technologies" component={Technologies} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
            <Footer />
     </React.Fragment>
    );
  };
  
  export default App;