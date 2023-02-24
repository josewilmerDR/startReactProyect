import React from "react";
import '../../../src/styles/index.css'; // Importar el archivo CSS

function Jumbotrom(){
    return (
        <div className="mt-0 mb-4 p-5 text-black rounded" id="jumbotromElement">
            <h1>Jumbotron Example</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Consequatur neque quis sapiente numquam nobis omnis explicabo incidunt ut totam dolorum, 
                adipisci laboriosam quae accusantium est, sit amet ab maiores quod.
            </p>
            <button type="button" className="btn btn-primary">Call to action</button>
        </div>
    )
}

export default Jumbotrom;