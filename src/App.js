import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Sample from './Sample';
import Background from './Background';
import Error from './Error.js';


const App = () => {
    return(
        <>
        <Background />
        <Switch>
            <Route exact path="/reactjs" component={Form} />
            <Route exact path="/sample" component={Sample} />
            <Route path='/' component={Error} />
        </Switch>
        </>
    ); 
}


export default App;                     