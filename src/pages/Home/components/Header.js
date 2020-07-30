import React from "react";
import { Button } from '@material-ui/core';
//import "../styles.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from "react-feather"
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
 appBar:{
     boxShadow: 'none',

 },
 img:{
    maxHeight: "55px",
 },
 grow:{
    flexGrow: 1,
 },
userSection:{
    display:'flex',
    alignItems:"center"
},
button:{
    marginRight: 10,
},
bell:{
    marginRight: 10,

},

})

function Header(){
    const classes = useStyles();
   return(
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
               
    <Toolbar>
        <img src="/images/logo1.png" alt="logo" className={classes.img}></img>
        <div className={classes.grow}></div>
        <div  className={classes.userSection}>
        <Button variant="contained" color="primary" className={classes.button}>
            Cadastrar-se
        </Button>
        <SvgIcon className={classes.button}>
            <Bell ></Bell>
        </SvgIcon>
        <Avatar alt="Avatar" src="/" />
        </div>
        
        {/* <div>
            <a href="/">Clube Seleto</a>
            <input type="text"></input>
        </div>

        <div >
        <Button variant="contained" color="primary">
        Cadastrar
        </Button>
            <span>IMG1</span>
            <span>IMG2</span>
        </div> */}

    </Toolbar>
    </AppBar>
   )
}

export default Header;