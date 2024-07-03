import { useState } from 'react';
import Card from './Card'
function Tours({tours, removeTour}){
    console.log(tours);
    return(
        <div className="container">
            <h2 className='title'>Plan A Tour</h2>
            <div className='cards'>
                {
                    tours ? tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
                    }) : null
                }
            </div>
        </div>
       
    );
}
export default Tours;