import React, { Component } from 'react';
import Headertop from './Headertop';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
    render() {
        return (
            <div>
                {/* Add your header content here */}
                <Headertop />
                <HeaderBottom />
            </div>
        );
    }
}

export default Header;
