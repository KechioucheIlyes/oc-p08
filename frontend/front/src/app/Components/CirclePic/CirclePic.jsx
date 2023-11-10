
export default function CirclePic({ image, index, totalImages }) {
    const circleRadius = 100; // Ajustez le rayon selon vos besoins
    const centerCoordinates = { x: 200, y: 200 }; // Ajustez les coordonnées du centre selon vos besoins
  
    // Calculez les coordonnées du cercle
    const theta = (index / totalImages) * 2 * Math.PI;
    const x = centerCoordinates.x + circleRadius * Math.cos(theta);
    const y = centerCoordinates.y + circleRadius * Math.sin(theta);
  
    // Appliquez les styles pour positionner l'image en tant que cercle
    const circleStyle = {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)', // Centrez l'image sur les coordonnées calculées
      borderRadius: '50%', // Rendez l'image circulaire
      backgroundImage: `url(${image})`, // Utilisez l'image passée en tant que background
      backgroundSize: 'cover', // Ajustez la taille de l'image
      width: '50px', // Ajustez la largeur de l'image selon vos besoins
      height: '50px', // Ajustez la hauteur de l'image selon vos besoins
    };
  
    return (
        <div className="circle-contain">
            <div className="circle" style={circleStyle}>

                </div>
        </div>
      
    );
  }