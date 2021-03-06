import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes } from "react-router-dom"

import Header from "./Header"
import NewPost from "../Post/New";
import Feed from "../Feed";
import Post from "../Post";
import Profile from "../Profile";
import Catalog from "../Catalog";
import IntegrateHome from "../IntegrateHome";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: theme.palette.background.dark,
    },
    main: {

        padding: 24,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    toolbar: {
        minHeight: 64,

    }
}));

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<IntegrateHome />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path="/post/:slug" element={<Post />} />
                    <Route path="/feed" element={<IntegrateHome />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/catalog" element={<Catalog />} />


                    <Route path="*" element={<h1>ERROR 404</h1>} />
                </Routes>
            </main>
        </div>
    )

}
export default Home;