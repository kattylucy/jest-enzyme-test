import React from 'react';
import './styles.scss';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <p>LOGO</p>
                </div>
            </div>
        </header>
    )
};

export default Header;