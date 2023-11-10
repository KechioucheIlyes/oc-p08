export default function CirclePic({ image, index, totalImages }) {
    const circleRadius = 100; 
  

    const centerCoordinates = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  
    // Calculez les coordonnées du cercle
    const theta = (index / totalImages) * 2 * Math.PI;
    const x = centerCoordinates.x + circleRadius * Math.cos(theta);
    const y = centerCoordinates.y + circleRadius * Math.sin(theta);
  
  
    const circleStyle = {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)', 
      borderRadius: '50%', 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover',
      width: '50px',
      height: '50px',
    };
  
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="circle" style={circleStyle}></div>
      </div>
    );
  }
  