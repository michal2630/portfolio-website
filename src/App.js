import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import MyWork from "./components/MyWork";



const App = () => {

    return (
     <React.Fragment>

          <Navbar />
          <div className="app-wrapper">
            <Switch>
              <Route exact path="/greeting" component={Greeting} />
              <Route exact path="/my-work" component={MyWork} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>



     </React.Fragment>
    );
  };
  
  export default App;