'use client'


export default function Notfound(){
    const images = [
        'block1.jpg',
        'block2.jpg',
        'block3.jpg',
        'block4.jpg',
        // ... ajoutez autant d'images que nécessaire
      ];
    
      return (
        <div>
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <div className="number-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Block ${index + 1}`} />
            ))}
          </div>
        </div>
      );
}