import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import {Avatar,IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
//Wrap the MenuIcon in IconButton Tags so as to add ripple effect to the button when clicked

function Header(){
    return (
        <div className="header">

            <div className="header-left">
                
            <IconButton>
            <MenuIcon/>
            </IconButton>

            <img 
            src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
           alt="Gmail-Logo"
            />

            </div>

            <div className="header-middle">
                <SearchIcon/>
                <input
                placeholder="Search Mail"
                type="text"
                />
                <ArrowDropDownIcon />
            </div>

            <div className="header-right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar/>
            </div>
            
        </div>
    )
}

export default Header