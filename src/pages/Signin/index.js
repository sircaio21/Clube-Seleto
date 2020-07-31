import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Avatar, Typography, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField"

const useStyles =  makeStyles((theme)=>({
    root:{
        //display: "flex",
        height:"100vh",
    },
    left:{
    background: "#ffcbdb",
    },

    avatar:{
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)

    },
    //     flexGrow: 0,
    //     flexBasis: "58%",
    //     display: "flex",
    //     flexDirection:"column",
    //     justifyContent:"center",
    //     alignItems: "center"
    // },
    right:{
        background: "#ffcbdb",
    },
    
    img:{
        maxHeight: "400px",
        padding: theme.spacing(2),
     },
     button:{
         marginTop: theme.spacing(2), 
     },
     form:{
        margin: theme.spacing(0,4,0,4),
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center"
     }

}));
function Copyright(){
    return(
        <Typography variant="body2" align="center">
        {"Copyright © "}
        <a color="inherit"  href="#">Clube Seleto</a>{" "}
        {new Date().getFullYear()}
        </Typography>
    )
}
function Signin(){
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid className={classes.left}
            md={7} 
            item 
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <img src="/images/cover.png" alt="logo" className={classes.img}></img>,

            </Grid>

            <Grid md={5} className={classes.right} >
                <Box display="flex"
                      flexDirection="column"
                      alignItems="center" 
                      m={8} >
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <Typography variant="h5">
                        Dados de usuário:
                    </Typography>
                    <form className={classes.form}>
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                        />
                        <Button
                        fullWidth  
                        className={classes.button}
                                variant="contained"
                                color="primary"      
                            >
                                Entrar
                        </Button>
                    </form>
                    
                    <Grid Item>
                    <Link>Esqueceu sua senha?</Link>
                </Grid>
                <Grid Item>
                    <Link>Não tem uma conta?Registre-se</Link>
                </Grid>
                <Copyright/>
                
                </Box>
            </Grid>
            



        </Grid>
        

    )
        // <div className={classes.root}>
        //     {/* Flex Item container*/}
        //     <div className={classes.left}>
        //     <img src="/images/cover.png" alt="logo" className={classes.img}></img>
        //    {/* Flex Item */}
        //     </div>
        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h4>Acesso</h4>
        //             <input type="text"></input>
        //             <input type="password"></input>
        //         </form>
        //     </div>
        // </div>
        
        // )

    }

export default Signin;