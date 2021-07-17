import React from 'react'
import {Typography, Grid, Container, Button, TextField} from '@material-ui/core';
import useStyles from './Styles';

function Mint() {
    const Classes = useStyles();
    return (
        <div className={Classes.mint}>
        <Container maxWidth="sm">
            <Typography align="center" variant="h3" className={Classes.mintTitle}>
                Mint Your Own Collection
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <TextField
                    id="filled-number"
                    label="Number of Images"
                    type="number"
                    InputLabelProps={{shrink: true,}}
                    variant="filled"
                    style={{backgroundColor:"white"}}
                />
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" style={{backgroundColor:"white"}}>
                    Mint Now
                  </Button>
                </Grid>
              </Grid>

        </Container>
        </div>
    )
}

export default Mint
