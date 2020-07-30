import React from "react";
import { Button } from '@material-ui/core';
import "../styles.css"

function Header(){
   return(
    <header className="header">
               
    <div className="toolbar">
        <div>
            <a href="/">Clube Seleto</a>
            <input type="text"></input>
        </div>

        <div >
        <Button variant="contained" color="primary">
        Cadastrar
        </Button>
            <span>IMG1</span>
            <span>IMG2</span>
        </div>

    </div>

    </header>
   )
}

export default Header;