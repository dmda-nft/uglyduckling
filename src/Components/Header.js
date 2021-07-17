import React from 'react';
import { Typography, Grid, Container, Card, CardMedia, CardActions, CardContent, Button, Box } from '@material-ui/core';
import useStyles from './Styles';
import logo from '../images/egg.gif'



function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>

            <Container maxWidth="sm">
                <Typography align="center" variant="h2" className={classes.title}>
                    Coming Soon...
                </Typography>

                <CardActions style={{ justifyContent: 'center' }}>
                    <Button align="center" variant="contained" className={classes.websiteButton}> Go to Main Website</Button>
                </CardActions>
            </Container>


            <Container maxWidth="md" gutterBottom>
                <img src={logo} alt="loading..." className={classes.image} />
            </Container>

            <Container maxWidth="md" gutterBottom>
                {/* <Typography align="center" variant="h3" className={classes.title}>
                    What's so exciting?
                </Typography> */}

                <Typography align="center" variant="h2" className={classes.title}>
                    Nevada. Florida. Texas.
                </Typography>
            </Container>

        </div>
    )
}

export default Header;

