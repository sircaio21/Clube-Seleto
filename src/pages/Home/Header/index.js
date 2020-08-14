import React from "react";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector } from "react-redux";
import Account from "./account"
import Notifications from "./Notifications"
import WritePost from "./WritePost"
import { Link } from "react-router-dom"
import Settings from './Settings';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            maxHeight: "55px",
        },
    },
    img: {
        maxHeight: "55px",
        [theme.breakpoints.down('sm')]: {
            maxHeight: "40px",
        },
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: "center"
    },

}));

function Header() {
    const classes = useStyles();

    const account = useSelector(state => state.account);
    console.log(account)

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>

            <Toolbar>
                <Link to="/">
                    <img src="/images/logo1.png" alt="logo" className={classes.img}></img>
                </Link>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Hidden xsDown>
                        <WritePost />
                    </Hidden>

                    <Box ml={2}>
                        <Notifications />
                    </Box>

                    <Box ml={2}>
                        <Account />
                    </Box>
                    <Box ml={2}>
                        <Settings />
                    </Box>
                </div>


            </Toolbar>
        </AppBar>
    )
}

export default Header;