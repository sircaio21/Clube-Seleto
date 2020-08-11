import React, { useState } from "react";
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import { Box } from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import PostEditor from "./Editor"
import PostPreview from "./Preview"
import { PostProvider } from "../../../context/PostContext"

const useStyles = makeStyles(() => ({
    root: {
        background: "red",
        height: 'calc(100% - 70px )',
        overflow: "scroll"
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: "center"
    },
}));



function NewPost() {
    const classes = useStyles();





    return (
        <PostProvider>
            <Box display="flex"
                height='calc(100% - 70px )'
                overflow="scroll"

            >
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
                    <PostEditor />


                </Box>

                <Box width="50%" height="100%" padding={2} >

                    <PostPreview />
                </Box>

            </Box>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Button className={classes.button}>Salvar Rascunho</Button>
                    <Button color="secondary" variant="contained">Publicar</Button>
                </Toolbar>
            </AppBar>
        </PostProvider>
    );
}


export default NewPost;