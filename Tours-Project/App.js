import React,{useState,useEffect} from 'react';

import Loader from '../Loader';

import axios from 'axios';

import Tours from './Tours';

function App(props) {

    // State variable & function
    const[isLoading,setIsLoading] = useState(true);

    const[tours,setTours] = useState([]);
    
    const baseUrl = 'https://course-api.com/react-tours-project';

    // remove tour
    const removeTour = function(id){
        const newTour = tours.filter(function(tour){
            
            if(tour.id !== id){
                return true;
            }
        })
        setTours(newTour);
    }

    // Asynchronous nature
    const fetchData = function(){
        setIsLoading(true);
        
        // consuming code
        axios
            .get(baseUrl)

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke state function
                setTours(result);
                setIsLoading(false);
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    // Invoke useEffect hook
    useEffect(fetchData,[]);

    if(isLoading){
        return(
            <>
                <Loader/>
            </>
        )
    }

    if(tours.length === 0){
        return(
            <>
                <h2>
                    no tours left 
                </h2>

                <button className='btn btn-primary btn-sm text-uppercase' onClick={fetchData}>
                    refresh 
                </button>
            </>
        )
    }

    return (
        <>

            <h2 className='text-capitalize text-center text-primary mt-2'>
                tour project
            </h2>

            {/* Child Component Instance */}
            <Tours
                data={tours}
                removeTour={removeTour}
            />
                
        </>
    )
}

export default App;