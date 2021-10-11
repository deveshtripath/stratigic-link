import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
    

    return (
        <div className='header'>
            <div className="header__left">
                 <h1> STRATIGIC LINK </h1>
            </div>

            

            <div className="header__center">
               
            </div>

            <div className="header__right">
                <div className="header__info">
                </div>
                
                <IconButton>
                  <span className="home">  Home </span>
                </IconButton>

                <IconButton>
                    About Us
                </IconButton>

                 <IconButton>
                    Team
                </IconButton>

                 <IconButton>
                    DropDown <KeyboardArrowDownIcon/>
                 </IconButton>

                <IconButton>
                    Service
                </IconButton>
                
                <IconButton>
                    Portfolio
                </IconButton>

                <IconButton>
                    Contact
                </IconButton>

                <IconButton>
                   <span className="start"> Get Started </span>
                </IconButton>
            </div>
        </div>
    )
}

export default Header