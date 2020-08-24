import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import axios from "../../utils/axios"



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: "flex",
        alignItems: "center",

    },
    caption: {
        marginRight: theme.spacing(1)
    },
    captionName: {
        marginRight: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
    captionAge: {
        marginRight: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
    message: {
        height: "auto",
        marginBottom: theme.spacing(2),
        padding: "0 24px"
    },
    image: {
        maxHeight: 900,
        maxWidth: "100%",

    },
    content: {
        padding: 0,
    },
    contentArea: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    favorite: {
        marginLeft: "auto"
    }

}
))

function Catalog() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <div className={classes.root}>

                    <Grid container spacing={1}>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                                <CardHeader
                                    subheader={
                                        <div className={classes.subheader}>
                                            <Typography variant="caption" className={classes.caption}>
                                                Baby:
                            </Typography>
                                            <Typography variant="subtitle2" className={classes.captionName}>
                                                Rosa Bell
                                            </Typography>
                                            <Typography variant="subtitle2" className={classes.captionAge}>
                                                23 anos
                                            </Typography>
                                        </div>
                                    }
                                />
                            </Card>

                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3} spacing={1}>
                            <Card className={classes.root}>
                                <CardContent className={classes.content}>
                                    <CardActionArea className={classes.contentArea}>
                                        <img src="/images/avatars/avatar1_ruiva.jpg" className={classes.image} alt="img" />
                                    </CardActionArea>

                                </CardContent>
                            </Card>
                        </Grid>


                    </Grid>
                </div>
                <div className={classes.div2}>
                </div>
            </Box>
        </Container >
    )

}

export default Catalog;