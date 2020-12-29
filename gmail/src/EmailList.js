import { IconButton,Checkbox } from '@material-ui/core'
import React from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import Section from './Section'
import EmailRow from './EmailRow'

function EmailList(){
    return (
        <div className="emailList">

            <div className="emailList-settings">

            <div className="emailList-settings-left">
                <Checkbox />
                <IconButton>
                <ArrowDropDownIcon />
                </IconButton>

                <IconButton>
                    <RedoIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                

            </div>

            <div className="emailList-settings-right">

                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                <ChevronRightIcon />
                </IconButton>  
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>

            </div>
            </div>

            <div className="emailList-sections">
                <Section Icon={InboxIcon} 
                title="Primary" color="red" selected />

<Section Icon={PeopleIcon} 
                title="Social" color="#1A73E8" />

<Section Icon={LocalOfferIcon} 
                title="Promotions" color="green" />
            </div>

            <div className="emailList-list">
                <EmailRow

                title="YAHOO"
                subject="OOGA BOOGA"
                description="i am increasing the size of description TO SEE THE ELLIPSIES,NO ELLIPIES SO FAR"
                time = "11pm"

                />

                <EmailRow

                title="YAHOO"
                subject="OOGA BOOGA"
                description="Testing it"
                time = "11pm"

                />

            </div>

        </div>
    )
}

export default EmailList