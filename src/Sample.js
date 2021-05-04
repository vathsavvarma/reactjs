import React from 'react';
import '../node_modules/tachyons'

const Sample = () => {
    return (
        <section>
        <div className="flex items-center justify-center pa4">
            <a href="/" style={{marginTop:'50px'}}  className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>chevronLeft icon</title>
                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                </svg>
                <span className="pl1">Previous</span>
            </a>
        </div>
        <h1 className='tc'>Oopss!!</h1>
        <p className='tc f2 lh-cop'>This page is UnderMaintanance</p>
        </section>
    );
}

export default Sample;