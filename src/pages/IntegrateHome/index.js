import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Feed from "../Feed";
import Catalog from "../Catalog";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    tabPost: {
        color: theme.palette.primary.main,
        marginLeft: "25%"
    },
    panel: {
        width: "100%",
        padding: "0px",
    },

}
))

function IntegrateHome() {
    const [tab, setTab] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTab(newValue);
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`wrapped-tabpanel-${index}`}
                aria-labelledby={`wrapped-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={0}>{children}</Box>}
            </Typography>
        );
    }


    return <>
        <Tabs value={tab} onChange={handleChange} className={classes.tabPost}>
            <Tab label="Feed" icon={<HomeIcon />} ></Tab>
            <Tab label="Catálogo Sugar" icon={<FavoriteIcon />} > </Tab>
        </Tabs>

        <TabPanel value={tab} index={0} padding={0}>
            <Feed />
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <Catalog />
        </TabPanel>


    </>

}

export default IntegrateHome;