import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CarouselSlider from './Home_components/CarouselSlider';
import ImageSection from './Home_components/ImageSection';
import CardSection from './Home_components/CardSection';
import HowtoUse from './Home_components/HowtoUse';

function Home() {
  return (
    <div>
       < CarouselSlider />
       < ImageSection />
       < CardSection />
       < HowtoUse />
    </div>
  );
}

export default Home;
