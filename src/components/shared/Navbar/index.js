import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './index.scss';
import logo from '../../../assets/images/shared/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    console.log(window.pageYOffset, isScrolled);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={logo} alt="logo" />
                <Link to="/" className='link'><span>Homepage</span></Link>
                <Link to="/series" className='link'><span>Series</span></Link>
                <Link to="/movies" className='link'><span>Movies</span></Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className="icon"/>
                <span>Kid</span>
                <NotificationsIcon className="icon"/>
                <img src="https://toppng.com/public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" alt="user" />
                <div className="profile">
                    <ArrowDropDownIcon className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar