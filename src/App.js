import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";



const App = () => {

    const { location } = useContext(__RouterContext);

    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: "translate(100%, 0)"},
      enter: { opacity: 1, transform: "translate(0%, 0)"},
      leave: { opacity: 0, transform: "translate(-50%, 0)"}
    });


    return (
     <React.Fragment>
          <Navbar />
          <div className="website-content">
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/" component={Home} />
                <Route exact path="/technologies" component={Technologies} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </animated.div>
          ))}
          
          </div>
            <Footer />

     </React.Fragment>
    );
  };
  
  export default App;