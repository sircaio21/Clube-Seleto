import React from "react"
import { TextField } from "@material-ui/core";

import { usePost } from "../../../../context/PostContext";
function Title() {

    const ctx = usePost();
    const { title, setTitle } = ctx;
    return (

        <TextField id="title"
            label="Título"
            fullWidth
            value={title}
            onChange={setTitle}>

        </TextField>

    )


}

export default Title;