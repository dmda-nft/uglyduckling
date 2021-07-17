import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core';
import { Carousel } from '3d-react-carousal';
import useStyles from './Styles';

function Gallery() {
    const Classes = useStyles();
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];

    return (
        <div className={Classes.galleryRoot}>

            <Container maxWidth="md" className={Classes.gallery}>
                <Carousel slides={slides} autoplay={true} interval={2000}/>
            </Container>


            <Container maxWidth="sm" align="center" className={Classes.galleryButton}>
                <Button variant="contained">
                    Browse Gallery
                </Button>
            </Container>
        </div>
    )
}

export default Gallery
