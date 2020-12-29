import React from 'react'
import "./Mail.css"
import {IconButton} from '@material-ui/core'
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useHistory } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PrintIcon from '@material-ui/icons/Print'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'


function Mail(){
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-toolsleft">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>    

            </div>

            <div className="mail-toolsRight">
                <IconButton>
                    <UnfoldMoreIcon />
                </IconButton>

                <IconButton>
                    <PrintIcon />
                </IconButton>

                <IconButton>
                    <ExitToAppIcon />
                </IconButton>

            </div>

        </div>
        
    )
}

export default Mail