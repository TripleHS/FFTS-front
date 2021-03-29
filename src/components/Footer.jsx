import React from "react"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"
import twitter from "../images/twitter.svg"
import clock from "../images/clock.svg"
import phone from "../images/phone.svg"
import pointer from "../images/pointer.svg"
import heart from "../images/heart.png"

const Footer = () => {
  return (
    <footer>
      <div className="pt-2 bg-footer">
        <div className="flex justify-center">
          <img className="w-12 m-4" src={heart} alt="logo" />
          <h1 className="my-auto text-white">FarFromTheStretchers</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="flex mx-4">
              <img className="w-8 h-8 m-4" src={pointer} alt="pointer" />
              <p className="m-auto text-white">
                Adres:
                <br />
                ul. Zbyszka z Bogdańca 15
                <br />
                80-783 Gdańsk
              </p>
            </div>
            <div className="flex mx-4">
              <img className="w-8 h-8 m-4" src={phone} alt="phone" />
              <p className="m-auto text-white">
                Infolinia:
                <br />
                874 459 985
              </p>
            </div>
            <div className="flex mx-4">
              <img className="w-8 h-8 m-4" src={clock} alt="clock" />
              <p className="m-auto text-white">
                Infolinia czynna w godzinach:
                <br />
                pn-pt: 6:00-18:00
                <br />
                sob: 10:00-14:00
              </p>
            </div>
          </div>
          <div className=" p-2 flex justify-center">
            <a className="w-8 h-8 m-4" href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="w-8 h-8 m-4" href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a className="w-8 h-8 m-4" href="#">
              <img src={youtube} alt="youtube" />
            </a>
            <a className="w-8 h-8 m-4" href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <p className="text-center pb-4 text-white">
          Copyright © 2021 FarFromTheStretchers. All rights reserved{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
