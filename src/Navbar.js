import React from 'react';
import '../node_modules/tachyons'

const Navbar = () => {
    return (
        <header class="bg-black-90 fixed w-100  ph4-m ph5-l">
            <nav class="f6 fw6 ttu tracked tc">
                <h1 style={{color:'white'}}>Amphenol ICC</h1>
            </nav>
        </header>



    );
}

export default Navbar;