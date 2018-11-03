import React from 'react';
// import { Parallax, Background } from 'react-parallax';
import { Parallax, Image } from 'react-scroll-parallax';


const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="/image.jpg" />
    </Parallax>
);
  
