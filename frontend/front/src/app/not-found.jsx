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


export default function Notfound(){
    const images = [
        scrapPic    ,
        bookiPic,
        carducciPic,
        MVG,
        Kasa,
        SohpieProject,
        ViteTodo,
        defaultPic,
        
      ];
    
      return (
        <div className='not-found-wrapper'>
          <h1>Vous avez attérie dans une page qui n'existe pas vous avez tout de meme le choix entre consulter mes projet Git ou de revenir a l'acceuil !.</h1>
          <div className="number-4">
            {images.map((image, index) => (
              <Image key={index} src={image} width={180} height={110} alt={`Block ${index + 1}`} />
            ))}
          </div>
          <div className="number-0">
            {images.map((image, index) => (
              <Image key={index} src={image} width={180} height={110} alt={`Block ${index + 1}`} />
            ))}
          </div>
          <div className="number-4">
            {images.map((image, index) => (
              <Image key={index} src={image} width={180} height={110} alt={`Block ${index + 1}`} />
            ))}
          </div>
        </div>
      );
}