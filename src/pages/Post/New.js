import React, { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone'
import { makeStyles } from "@material-ui/styles"
import { Box, } from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
    button: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 100

    },
    imagePreview: {

        maxHeight: "100%",
        maxWidth: "100%"
    },
    box2: {
        alignContent: "center",

    }

}));



function NewPost() {
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [markdownText, setMarkdownText] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false, accept: "image/*" })

    return (
        <>
            <Box display="flex"
                height='calc(100% - 70px )'
                overflow="scroll"

            >
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button>Carregar imagem</Button>
                    </div>
                    {image &&
                        <img src={image} alt="background" className={classes.image}></img>
                    }

                    <p>Título</p>
                    <p>Editor markdown</p>
                </Box>

                <Box width="50%" height="100%" padding={2} >
                    {image &&
                        <img src={image} alt="background" className={classes.imagePreview}></img>
                    }
                </Box>

            </Box>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Button className={classes.button}>Salvar Rascunho</Button>
                    <Button color="secondary" variant="outlined">Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default NewPost;