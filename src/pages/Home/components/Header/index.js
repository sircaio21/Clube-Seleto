import React from "react";
import { Button } from '@material-ui/core';
//import "../styles.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from "react-feather"
import { useSelector } from "react-redux"
import Account from "./account"

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
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,

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
                    <Button variant="contained" color="primary" className={classes.button}>
                        Cadastrar-se
        </Button>
                    <SvgIcon className={classes.button}>
                        <Bell ></Bell>
                    </SvgIcon>
                    <Account />
                </div>


            </Toolbar>
        </AppBar>
    )
}

export default Header;