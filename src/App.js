import React from "react";
import {Switch, Route} from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import axios from 'axios';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

const App = () => {
    const messageHtml = '<html lang="en"><body>someText</body></html>';
    axios({
        method: "POST",
        url: "http://localhost:5000/send",
        data: {
            from: 'mike.mich1996@gmail.com',
            to: 'mike.mich1996@gmail.com',
            messageHtml: messageHtml
        }
    }).then((response) => {
        console.log(response);
        if (response.data.msg === 'success') {
            alert("Email sent, awesome!");
        } else if (response.data.msg === 'fail') {
            alert("Oops, something went wrong. Try again")
        }
    });

    return (
        <React.Fragment>
            <Navbar/>
            <div className="app-wrapper">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/technologies" component={Technologies}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default App;
