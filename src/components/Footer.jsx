import React from "react"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"
import twitter from "../images/twitter.svg"
import clock from "../images/clock.svg"
import phone from "../images/phone.svg"
import pointer from "../images/pointer.svg"
import heart from "../images/heart.png"
import _uniqueId from "lodash/uniqueId"

const Footer = () => {
  const socialImages = [facebook, instagram, youtube, twitter]

  const SocialItem = ({ src, alt }) => (
    <a className="w-8 h-8 m-4" href="#">
      <img src={src} alt={alt ? alt : ""} />
    </a>
  )

  const InfoWrapper = ({ children, image }) => (
    <figure className="flex mx-4 items-start">
      <img className="w-8 h-8 m-4 my-2" src={image} alt="pointer" />
      <p className="mx-auto text-white self-start">{children}</p>
    </figure>
  )

  return (
    <footer>
      <div className="pt-2 bg-footer">
        <div className="flex justify-center">
          <img className="w-12 m-4" src={heart} alt="logo" />
          <h1 className="my-auto text-white">FarFromTheStretchers</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <InfoWrapper image={pointer}>
              Adres:
              <br />
              ul. Zbyszka z Bogdańca 15
              <br />
              80-783 Gdańsk
            </InfoWrapper>
            <InfoWrapper image={phone}>
              Infolinia:
              <br />
              874 459 985
            </InfoWrapper>

            <InfoWrapper image={clock}>
              Infolinia czynna w godzinach:
              <br />
              pn-pt: 6:00-18:00
              <br />
              sob: 10:00-14:00
            </InfoWrapper>
          </div>{" "}
          <div className=" p-2 flex justify-center">
            {socialImages.map((image) => (
              <SocialItem key={_uniqueId()} src={image} />
            ))}
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
