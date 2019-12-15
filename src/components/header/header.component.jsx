import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';
import {ReactComponent as Logo} from './../../assets/images/crown.svg';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACTS
            </Link>
        </div>
    </div>
)

export default Header;