export default function CirclePic({ image, index, totalImages }) {
    const circleRadius = 100; // Ajustez le rayon selon vos besoins
    const centerCoordinates = { x: 200, y: 200 }; // Ajustez les coordonnées du centre selon vos besoins
  
    
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
  
    // Appliquez les styles pour le conteneur Flexbox
    const containerStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      };
  
    return (
      <div style={containerStyle}>
        <div className="circle" style={circleStyle}></div>
      </div>
    );
  }
  