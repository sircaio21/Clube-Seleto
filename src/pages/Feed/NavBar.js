import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: "100%"
    }

}));

const babeis = [
    { id: 1, name: 'Roberta Fly' },
    { id: 1, name: 'Graça Brown' },
    { id: 1, name: 'Lynnie Rosa' },
    { id: 1, name: 'Cassandra Mendes' },
    { id: 1, name: 'Cláudia Fonseca' },
    { id: 1, name: 'Monique Ferreira' },
    { id: 1, name: 'Raquel Herreira' },
]

function NavBar() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Paper className={classes.root}>
            <Button onClick={() => navigate("/signup")} variant="outlined" color="secondary" className={classes.button}>Cadastrar-se</Button>
            <ListSubheader>{"Babeis em alta"}</ListSubheader>
            {
                babeis.map((item) => (
                    <ListItem key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Mostrar mais
        </ListItem>

        </Paper>

    )
}

export default NavBar;