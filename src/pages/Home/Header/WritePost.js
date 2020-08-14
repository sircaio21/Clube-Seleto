import React from "react"
import Button from "@material-ui/core/Button"
import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            maxHeight: "30px",

        },
    },


}));


function WritePost() {
    const navigate = useNavigate();
    const account = useSelector(state => state.account);
    const classes = useStyles();
    const isAuthenticated = !!account.user;

    const handleClick = () => {
        if (isAuthenticated) {
            navigate("/post/new");
        } else {
            navigate("/signin")
        }

    }
    return (
        <Button variant="contained" color="primary"
            onClick={handleClick}
            className={classes.button} >
            Novo Post
        </Button>

    )
}

export default WritePost;