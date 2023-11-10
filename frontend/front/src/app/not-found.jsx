import React from 'react';
import Image from 'next/image';
import scrapPic from "./assets/Mail_scrap.png";
import bookiPic from "./assets/Booki.png";
import carducciPic from "./assets/carducci.png";
import MVG from "./assets/P07.png";
import Kasa from "./assets/ScreenshotKasa.png";
import SohpieProject from "./assets/P03.png";
import ViteTodo from "./assets/todoList.png";
import defaultPic from "./assets/defaultpic.jpg";

export default function NotFound() {
  const images = [
    scrapPic,
    bookiPic,
    carducciPic,
    MVG,
    Kasa,
    SohpieProject,
    ViteTodo,
    defaultPic,
  ];

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className="number-4">
        {/* First row */}
        <div className="number-4-row">
          <Image src={images[0]} width={350} height={210} alt={`Block 1`} />
          <Image src={images[1]} width={350} height={210} alt={`Block 2`} />
        </div>
        {/* Second row */}
        <div className="number-4-row">
          <Image src={images[2]} width={350} height={210} alt={`Block 3`} />
          <Image src={images[3]} width={350} height={210} alt={`Block 4`} />
        </div>
        {/* Third row */}
        <div className="number-4-row">
          <Image src={images[4]} width={350} height={210} alt={`Block 5`} />
          <Image src={images[5]} width={350} height={210} alt={`Block 6`} />
        </div>
        {/* Fourth row */}
        <div className="number-4-row">
          <Image src={images[6]} width={350} height={210} alt={`Block 7`} />
          <Image src={images[7]} width={350} height={210} alt={`Block 8`} />
        </div>
      </div>
    </div>
  );
}
