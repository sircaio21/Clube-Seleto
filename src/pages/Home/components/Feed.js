import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PostCard from "../../../components/PostCard"

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex"
    }
}))
 
const posts = [
    {
    id:1,
    autor:{ 
        id: 1, 
        name:"Roberta Fly",
        username:"robertinha123",
        avatar:"/images/avatars/avatar3_japa.jpg"
              },
    title: "Meu novo álbum!!",
    date:"April 21, 2020",
    description: "Oq acharam??",
    image: "/images/posts/post3_japa.jpg",            
    },

    {
    id:1,
    autor:{ 
        id: 1, 
        name:"Graça Brown",
        username:"gracinha33",
        avatar:"/images/avatars/avatar1_ruiva.jpg"
              },
    title: "Meu novo álbum!!",
    date:"April 21, 2020",
    description: "Oq acharam??",
    image: "/images/posts/post1_ruiva.jpg",            
    },
    {
    id:1,
    autor:{ 
        id: 1, 
        name:"Lynnie Rosa",
        username:"rosa_lynnie",
        avatar:"/images/avatars/avatar2_loira.jpg"
              },
    title: "Meu novo álbum!!",
    date:"April 21, 2020",
    description: "Oq acharam??",
    image: "/images/posts/post2_loira.jpg",            
    },

    ];

function Feed(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
           
        </div>

    )
}

export default Feed;