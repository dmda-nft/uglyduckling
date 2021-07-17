import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useStyles from './Styles'

//import {Twitter, Facebook} from '@material-ui/icons'
import discord from '../icons/discord.png'
import twitter from '../icons/twitter.png'
import medium from '../icons/medium.png'

export default function ButtonAppBar() {
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div >
      <AppBar position="static" style={{ background: "#29304e" }} className={classes.appbar}>
        <Toolbar>
            <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true">
                <MenuIcon />
            </IconButton>

            {/* <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}> 
                <MenuItem onClick={handleClose}>Item1</MenuItem>
                <MenuItem onClick={handleClose}>Item2</MenuItem>
                <MenuItem onClick={handleClose}>How it works</MenuItem>
            </Menu>*/}
        
            <IconButton color="inherit" onClick={()=> window.open("https://www.twitter.com/0xuglyduckling", "_blank")} >
            <img src={twitter} height={25} width={30} />
            </IconButton>

            <IconButton color="inherit" onClick={()=> window.open("https://www.discord.com", "_blank")} >
            <img src={discord} height={25} width={30}/>
            </IconButton>

            <IconButton color="inherit" onClick={()=> window.open("https://www.medium.com", "_blank")} >
            <img src={medium} height={25} width={30}/>
            </IconButton>

            {/* <Button edge="end" onClick={() => { alert('clicked')}} color="secondary" className={classes.socialButton} variant="contained">Connect Wallet</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}