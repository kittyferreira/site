import React from 'react';
import './imagem.css';

export default function Imagem() {
    return(
    
    <>
<h2>The object-position Property</h2>

<p>Resize the image to fit its content box, and position the image 5px from the left and 10% from the top inside the content box:</p>
<img className="a" src="paris.jpg" alt="Paris" width="400" height="300">

<h2>Original image:</h2>
<img src="paris.jpg" alt="Paris" width="400" height="300">

<p>Note: The object-position and object-fit properties are not supported in Internet Explorer/Edge 15 or earlier.</p>
    
   </>
    )
}
