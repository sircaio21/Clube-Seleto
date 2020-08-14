import React from "react";
import { Box } from "@material-ui/core"
import PostEditor from "./Editor"
import PostPreview from "./Preview"
import { PostProvider } from "../../../context/PostContext"
import BottomBar from "./BottomBar"
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({

    editor: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",

        },
    },
    preview: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },

}));

function NewPost() {

    const classes = useStyles();
    return (

        <PostProvider>
            <Box display="flex"
                height='calc(100% - 70px )'
            // overflow="scroll"

            >

                <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd"
                    className={classes.editor}
                >
                    <PostEditor />
                </Box>


                <Box width="50%" height="100%" padding={2}
                    className={classes.preview} >

                    <PostPreview />
                </Box>







            </Box>
            <BottomBar />

        </PostProvider>
    );
}


export default NewPost;