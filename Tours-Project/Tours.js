import React from 'react';

import Tour from './Tour';

function Tours(props) {
    // Object Destructuring - ES6
    const{data,removeTour} = props;

    return (
        <>

            {
                data.map(function(place){
                    // Object Destructuring - ES6
                    const{id} = place;

                    return(
                        <Tour
                            key={id}

                            /* Pass Data to child components */
                            {...place}
                            removeTour={removeTour}
                        />
                    )
                })
            }
            
        </>
    )
}

export default Tours;