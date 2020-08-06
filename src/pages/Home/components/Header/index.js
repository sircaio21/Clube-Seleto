import React from "react";
import { Box } from '@material-ui/core';
//import "../styles.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector } from "react-redux";
import Account from "./account"
import Notifications from "./Notifications"
import WritePost from "./WritePost"

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
                <img src="/images/logo1.png" alt="logo" className={classes.img}></img>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <WritePost variant="contained" color="primary" className={classes.button}>
                        Cadastrar-se
                </WritePost>
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