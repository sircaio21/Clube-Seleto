import React from "react";
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import { Box, Typography } from "@material-ui/core"
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from "react-markdown";
import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({

    imagePreview: {

        maxHeight: "50%",
        maxWidth: "50%"

    },

    avatar: {
        marginRight: theme.spacing(2)


    },
}));


function PostPreview() {
    const ctx = usePost();
    const { image, title, markdownText } = ctx;
    const classes = useStyles();
    const account = useSelector((state) => state.account)
    return (
        <>
            {image &&
                <img src={image} alt="background" className={classes.imagePreview}></img>

            }

            <Box mb={2}>
                <Typography variant="h2"> {title} </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
                <Box >
                    <Avatar className={classes.avatar} src={account.user?.avatar} />
                </Box>

                <Box>
                    <Typography variant="body1"> {account.user?.name}</Typography>
                    <Typography variant="body1" color="textSecondary"> Há 10 dias </Typography>
                </Box>
            </Box>
            <Divider />
            <Markdown source={markdownText} />

        </>

    )



}

export default PostPreview;