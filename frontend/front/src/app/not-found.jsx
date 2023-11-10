
'use client'
import Image from 'next/image'
import scrapPic from "./assets/Mail_scrap.png"
import bookiPic from "./assets/Booki.png"
import carducciPic from "./assets/carducci.png"
import MVG from "./assets/P07.png"
import Kasa from "./assets/ScreenshotKasa.png"
import SohpieProject from "./assets/P03.png"
import ViteTodo from "./assets/todoList.png"
import defaultPic from "./assets/defaultpic.jpg"
import CirclePic from './Components/CirclePic/CirclePic'


export default function Notfound() {
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

  const circleRadius = 100; 
  const centerCoordinates = { x: 200, y: 200 }; 

  return (
    <>
      <div id='circle-container' className='not-found-wrapper'>
        {images.map((element, index) => {
          // Calculez les coordonnées du cercle
          const theta = (index / images.length) * 2 * Math.PI;
          const x = centerCoordinates.x + circleRadius * Math.cos(theta);
          const y = centerCoordinates.y + circleRadius * Math.sin(theta);

          
          const circleStyle = {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)', 
            borderRadius: '50%', 
          };

          return <CirclePic key={index} style={circleStyle} />;
        })}
      </div>
      <p>
        Vous avez atterri sur une page qui n'existe pas. Vous avez tout de même le choix entre consulter mes projets Git ou revenir à l'accueil !
      </p>
    </>
  );
}
