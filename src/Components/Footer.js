import React from 'react'
import { Typography, Grid, Container, Button, TextField, Link } from '@material-ui/core';
import useStyles from './Styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function Footer() {
  const Classes = useStyles();
  return (
    <div>
      <footer className={Classes.footer}>
        {/*<Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
          </Typography>*/}
        <Copyright />
      </footer>
    </div>


  )
}

export default Footer
