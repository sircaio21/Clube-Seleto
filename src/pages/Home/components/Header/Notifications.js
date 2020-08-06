import React, { useState, useRef, useEffect } from "react";
import { SvgIcon, IconButton, Typography, Avatar, ListItemText, List, ListItem, ListItemAvatar } from "@material-ui/core";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import Popover from "@material-ui/core/Popover";
import { getNotifications } from "../../../../actions/notificationActions"
import {
    Star as StarIcon,
    Bell as BellIcon,
    DollarSign as DolarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }

}));



const iconsMap = {
    reviews: StarIcon,
    messages: MessageIcon,
    likes: HeartIcon,
    diamonds: DolarIcon,
}

function Notifications() {
    const account = useSelector((state) => state.account)
    const notifications = useSelector((state) => state.notifications.notifications)
    const isAuthenticated = !!account.user;
    const ref = useRef();
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleOpen = () => {
        console.log("ABRE")
        console.log(ref)
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        dispatch(getNotifications())

    }, [dispatch])
    console.log(notifications)


    return (
        isAuthenticated && (
            <>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon >
                        <BellIcon />
                    </SvgIcon>
                </IconButton >
                <Popover
                    onClose={handleClose}
                    open={isOpen}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary" >
                            Notificações
                        </Typography>
                    </Box>
                    <List>
                        {
                            notifications.map((notification) => {

                                const Icon = iconsMap[notification.type]
                                return (

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.icon}>
                                                <SvgIcon>
                                                    <Icon />
                                                </SvgIcon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={notification.title} primaryTypographyProps={{ variant: "subtitle2", colo: "textPrimary" }} secondary={notification.description} />
                                    </ListItem>


                                )
                            })
                        }
                    </List>

                </Popover>
            </>
        )
    )


}

export default Notifications;