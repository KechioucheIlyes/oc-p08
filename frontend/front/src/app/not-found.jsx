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
        
        // ... ajoutez autant d'images que nécessaire
      ];
    
      return (
        <div>
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <div className="number-4">
            {images.map((image, index) => (
              <Image key={index} src={image} alt={`Block ${index + 1}`} />
            ))}
          </div>
        </div>
      );
}