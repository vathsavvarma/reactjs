import React from 'react';

const Error = () => {
    return(
        <section>
            <div className="vh-100 tc bg-washed-blue baskerville">
            <header className="tc ph5 lh-copy">
                <h1 style={{marginTop:'70px'}} className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
                <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
            </header>
            <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
            <ul className="list tc pl0 w-100 mt5">
                <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/reactjs">Home</a></li>
            </ul>
            </div>
        </section>
    );
}


export default Error;