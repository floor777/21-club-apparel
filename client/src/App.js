import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Items from './Items';
import Collections from './Collections';
import Carousel, { CarouselItem } from "./Carousel";
import { Clock} from './DiscountCode';

function App() {

  

  return (
    <div> 
    <Header />
    <Items />
    <Clock />
    <Carousel>
      <CarouselItem><img src='mommy.jpg' height={500} width={750} ></img></CarouselItem>
      <CarouselItem><img src='mommy2.webp' height={570} width={827}></img></CarouselItem>
      <CarouselItem><img src ='kill-hoodies.jpg' height={500} width={750}></img></CarouselItem>
    </Carousel>

  
    
    
    </div>
    

    

  );
}

export default App;
