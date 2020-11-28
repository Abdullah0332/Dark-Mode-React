import React from 'react';
import SingleCard from './SingleCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import img1 from '../Images/01.jpg';
import img2 from '../Images/02.jpg';
import img3 from '../Images/03.jpg';
import img4 from '../Images/04.jpg';
import img5 from '../Images/05.jpg';
import img6 from '../Images/06.jpg';

const data =[
  { image: img1, title: "Threads", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},
  { image: img2, title: "Explore", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},
  { image: img3, title: "Finish", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},
  { image: img4, title: "Lines", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},
  { image: img5, title: "Southwest", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},
  { image: img6, title: "Window", description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
];

function Card() {
  return (
    <Container>
      <Grid container spacing={2} justify="center">
        {data.map((item , i) =>{
          return <SingleCard {...item} key={i} />
        })}
      </Grid>
    </Container>
  );
}

export default Card;
