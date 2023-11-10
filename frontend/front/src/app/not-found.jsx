
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

  return (
    <>
      <div id='circle-container' className='not-found-wrapper'>
        {images.map((element, index) => (
          <CirclePic key={index} image={element} index={index} totalImages={images.length} />
        ))}
      </div>
      <p>
        Vous avez atterri sur une page qui n'existe pas. Vous avez tout de même le choix entre consulter mes projets Git ou revenir à l'accueil !
      </p>
    </>
  );
}






