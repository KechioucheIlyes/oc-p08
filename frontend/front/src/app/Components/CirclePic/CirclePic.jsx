import Image from 'next/image';

export default function CirclePic({ image, index, totalImages }) {
    const circleRadius = 100; 
  

   
  
    // Calculez les coordonnées du cercle
    const theta = (index / totalImages) * 2 * Math.PI;
    const x = 50 + (25 * Math.cos(theta))
    const y = 50 + (25 * Math.sin(theta))
  
  
    const circleStyle = {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)', 
      borderRadius: '50%', 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover',

    };
  
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="circle" style={circleStyle}>
            <Image src={image} alt={`Image ${index}`} width={110} height={90} style={{ borderRadius : '20px',  border:"1px solid black" }}/>     
        </div>
      </div>
    );
  }
  