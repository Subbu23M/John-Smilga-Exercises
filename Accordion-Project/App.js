import React,{useState} from 'react';

import questions from './data';

import Question from './Question';

function App(props) {
    // State variable & function
    const[data,setData] = useState(questions);
    
    return (
        <>
            {
                data.map(function(question){
                    // Object Destructuring - ES6
                    const{id} = question;

                    return(
                        <Question
                            key={id}

                            // pass data to entire component
                            {...question}
                        />
                    )
                })
            }
        </>
    )
}

export default App;