import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Sample from './Sample';
import Background from './Background';
import Error from './Error.js';
import Navbar from './Navbar';



const App = () => {
    return(
        <>
        <Navbar />
        <Background />
        <Switch>
            <Route exact path="/reactjs" component={Form} />
            <Route exact path="/reactjs/sample" component={Sample} />
            <Route path="/" component={Error} />
        </Switch>
        </>
    ); 
}


export default App;                     