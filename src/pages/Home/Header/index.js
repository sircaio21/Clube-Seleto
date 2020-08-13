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

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',

    },
    img: {
        maxHeight: "55px",
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: "center"
    },

})

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
                    <WritePost />
                    <Box ml={4}>
                        <Notifications />
                    </Box>
                    <Box ml={4}>
                        <Account />
                    </Box>
                </div>


            </Toolbar>
        </AppBar>
    )
}

export default Header;