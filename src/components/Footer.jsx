import React from "react";
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
import clock from '../images/clock.png'
import phone from '../images/phone.png'
import pointer from '../images/pointer.png'
import heart from '../images/heart.png'


const CreateFooter = () => {
    return(
    <footer>
          <div className='bg-purple-300 pt-2'>
            <div className='flex justify-center'>
              <img className="w-12 m-4" src={heart} alt="logo"/>
              <h1 className='my-auto'>FarFromTheStretchers</h1>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-center'>
                <div className='flex'>
                  <img className="w-8 m-4" src={pointer} alt="pointer"/>
                  <p className="m-auto">Adres:</p>
                </div>
                <div className='flex'>
                  <img className="w-8 m-4" src={phone} alt="phone"/>
                  <p className="m-auto">Infolinia: 55 123 456 789</p>
                </div>
                <div className='flex'>
                  <img className="w-8 m-4" src={clock} alt="clock"/>
                  <p className="m-auto">Infolinia czynna w godzinach:</p>
                </div>
              </div>
              <div className=" p-2 flex justify-center">
                  <a className="w-8 h-8 m-4" href="#"><img src={facebook} alt="facebook"/></a>
                  <a className="w-8 h-8 m-4" href="#"><img src={instagram} alt="instagram"/></a>
                  <a className="w-8 h-8 m-4" href="#"><img src={youtube} alt="youtube"/></a>
                  <a className="w-8 h-8 m-4" href="#"><img src={twitter} alt="twitter"/></a>
              </div>
            </div>
            <p className='text-center pb-4'>Copyright © 2021 FarFromTheStretchers. All rights reserved </p>
          </div>
    </footer>
    );
}

export default CreateFooter;