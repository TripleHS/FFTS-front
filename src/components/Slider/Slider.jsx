import React from 'react';
import ReactDOM from 'react-dom';
import {Item1, Item2, Item3} from './Item'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";


const Slider = () => {
    return (
        <div className="slide-container flex justify-center">
            <Fade className='bg-primaryBg rounded-lg w-1/2'>
                <Item1/>
                <Item2/>
                <Item3/>
            </Fade>
        </div>
    )
}

export default Slider;