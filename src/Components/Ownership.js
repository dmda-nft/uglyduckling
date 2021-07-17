import React from 'react'
import {Typography, Grid, Container, Button, TextField} from '@material-ui/core';
import useStyles from './Styles';

function Ownership() {
    const Classes = useStyles();
    return (
        <div>
            <Container maxWidth="sm">
            <Typography align="center" variant="h3" color="textPrimary">
                Collections You Own
            </Typography>

            </Container>
            
        </div>
    )
}

export default Ownership
