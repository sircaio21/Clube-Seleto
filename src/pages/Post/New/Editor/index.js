import React, { useCallback } from "react";
import { Box } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import { useDropzone } from 'react-dropzone';

import { usePost } from "../../../../context/PostContext";

import Title from "./Title"

const useStyles = makeStyles((theme) => ({

    button: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 300


    },
    imagePreview: {

        maxHeight: "100%",
        maxWidth: "100%"

    },
    box2: {
        alignContent: "center",

    },
    textearea: {
        width: "100%",
        height: "30%",
        resize: "none",
        border: "none",
        outline: "none",
        fontSize: 15,
        fontFamily: "Roboto"

    },
}));


function PostEditor() {
    const classes = useStyles();
    const ctx = usePost();
    const { image,
        setImage,
        markdownText,
        setMarkdownText } = ctx;

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
    }, [setImage]);
    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false, accept: "image/*" })


    return (
        <>
            <Box mb={2} {...getRootProps()}>
                <input {...getInputProps()} />
                <Button variant="outlined" color="secondary">Carregar imagem</Button>
            </Box>

            <Box mb={2}>
                <Title
                />
            </Box>
            <Box mb={2}>
                {image &&
                    <img src={image}
                        alt="background"
                        className={classes.image}></img>
                }
            </Box>
            <textarea
                className={classes.textearea}
                onChange={setMarkdownText}
                value={markdownText}
                placeholder="Digite aqui uma descrição para seu post..."></textarea>
        </>

    )
};

export default PostEditor;