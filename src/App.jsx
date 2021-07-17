import React from 'react';
import { IconButton, Button, Typography, AppBar, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { Menu, PhotoCamera } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Components/Appbar.js'
import Header from './Components/Header.js'
import Gallery from './Components/Gallery.js'
import Mint from './Components/Mint.js'
import Ownership from './Components/Ownership.js'
import Footer from './Components/Footer.js'
import useStyles from './Components/Styles';


const App = () => {
    const Classes = useStyles();
    return (
        <>
            <head className={Classes.root}>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width" />
            </head>
            <main className={Classes.root}>
                <CssBaseline />
                <Appbar />
                <Header />
                <Footer />
            </main>
        </>
    );
}

export default App;