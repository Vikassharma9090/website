import React  from 'react';
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from 'react-router';

// import "./index.css";


;
const App=()=>{
     
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/navbar" component={Navbar} /> */}

            <Redirect />
           
        </Switch>
        <br/>
       <Footer/>

        </>
    );
};
export default App;




