import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Avatar, Typography, Button, Link,Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useNavigate} from "react-router-dom";
import axios from "../../utils/axios";


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
        marginBottom: theme.spacing(1),
        

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
         marginTop: theme.spacing(0), 
         marginBottom: theme.spacing(2)
     },
     form:{
        margin: theme.spacing(0,4,0,4),
        flexDirection:"column",
        justifyContent:"center",
        textAlign: "center"
     },
     esenha:{
        marginTop: theme.spacing(1)
     },
     paper:{
        flexDirection:"column",
        
        textAlign: "center"
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
    const navigate = useNavigate();
    
     async function handleSignIn(){
        const response = await axios.post("/api/home/login");
        console.log(response);
        
    }


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
                      direction="column"
                      justify="center"
                      alignItems="center" 
                      m={8} >
                    <Paper elevation={10} className={classes.paper} variant="rounded">
                    <Box display="flex"
                      flexDirection="column"
                      alignItems="center" 
                      m={1} >
                   <Avatar className={classes.avatar}>
                    </Avatar>
                    </Box>
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
                                size="large"                      
                                className={classes.button}
                                variant="contained"
                                color="primary"  
                                onClick={handleSignIn}    
                            >
                                Entrar
                        </Button>
                        
                    </form>
                    </Paper>
                    
                    
                    <Grid Item className={classes.esenha}>
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