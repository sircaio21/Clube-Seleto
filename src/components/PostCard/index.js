import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from "react-router";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: "flex",
        alignItems: "center"
    },
    caption: {
        marginRight: theme.spacing(1)
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

}));

function PostCard({ post }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const handlePostClick = () => {
        navigate(`/post/${post.slug}`);

    };

    return (
        <Grid item xs={12}>
            <Card className={classes.root} onClick={handlePostClick}>
                <CardHeader
                    avatar={<Avatar src={post.autor?.avatar} />}
                    title={<Typography variant="h6">{post.title}</Typography>}
                    subheader={
                        <div className={classes.subheader}>
                            <Typography variant="caption" className={classes.caption}>
                                Autor:
                            </Typography>
                            <Typography variant="subtitle2" className={classes.caption}>
                                {post.autor.name}
                            </Typography>
                            <Typography variant="subtitle2" className={classes.caption}>
                                {moment(post.date).fromNow()}
                            </Typography>
                        </div>
                    }
                />
                <CardContent className={classes.content}>
                    <CardActionArea className={classes.contentArea}>
                        <img src={post.image} className={classes.image} alt="img" />
                    </CardActionArea>

                </CardContent>
                <CardActions disableSpacing>

                    <IconButton aria-label="like">
                        <FavoriteIcon />
                        <Typography
                            style={{ cursor: "pointer" }}
                            color="textSecondary"
                            variant="body2">
                            {post.likes}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="coment">
                        <MessageIcon />
                        <Typography
                            className={classes.reactions}
                            color="textSecondary"
                            variant="body2">
                            {post.comments}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="favorite" className={classes.favorite}>
                        <BookmarkIcon />
                        <Typography
                            style={{ cursor: "pointer" }}
                            color="textSecondary"
                            variant="body2">

                        </Typography>
                    </IconButton>

                </CardActions>
            </Card>
        </Grid>
    );


}

export default PostCard;