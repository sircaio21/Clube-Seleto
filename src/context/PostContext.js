import React, { createContext, useState, useContext } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [markdownText, setMarkdownText] = useState("");


    const handleChangeTitle = (event) => {
        setTitle(event.currentTarget.value)

    }
    const handleMarkdownText = (event) => {
        setMarkdownText(event.currentTarget.value)

    }

    return <PostContext.Provider
        value={{
            image,
            setImage,
            title,
            setTitle: handleChangeTitle,
            markdownText,
            setMarkdownText: handleMarkdownText,
        }}
    >
        {children}
    </PostContext.Provider>
}

export function usePost() {
    const ctx = useContext(PostContext);
    const { image,
        setImage,
        title,
        setTitle,
        markdownText,
        setMarkdownText } = ctx;
    return {
        image,
        setImage,
        title,
        setTitle,
        markdownText,
        setMarkdownText
    }
};