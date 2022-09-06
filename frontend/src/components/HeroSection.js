import React from 'react';
import'../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        
        <h1>Team Rocket steht uns bei</h1>
        <p>Ein Glück!</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn--outline"
            buttonSize="btn--large"
            >
                Get Started
            </Button>
            <Button className="btns" buttonStyle="btn--primary"
            buttonSize="btn--large"
            >
                Watch trailer <i className='far-fa-playcircle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;