import React,{useState} from 'react';

import text from './data';

function App(props) {
    // State variable & function
    const[count,setCount] = useState(0);

    const[data,setData] = useState([]);

    // Event Handler as callback function -1
    const handleSubmit = function(e){
        // To stop browser to reload
        e.preventDefault();

        // Declared & Assigned
        let amount = count + '';

        if(count <= 0){
            // reassigned
            amount = 1;
        }

        if(count > 8){
            // reassigned
            amount = 8;
        }

        // Invoke state function
        setData(text.slice(0,amount));
    } 

    // Event Handler as callback function -2 
    const handleCount = function(e){
        const inputValue = e.target.value;
        
        // Invoke state function
        setCount(inputValue);
    }

    return (
        <>

            <h2 className='text-uppercase text-center mt-2 text-decondary'>
                tired of boring lorem ipsum?
            </h2>

            <form className='ml-2' onSubmit={handleSubmit}>

                {/* 1 */}
                <div className='form-group'>

                    <label>
                        Paragraphs:
                    </label>

                    <input 
                        type='number'
                        className='form-control-sm'
                        value={count}
                        onChange={handleCount}
                    />  

                    <button
                        type='submit'
                        className='btn btn-primary btn-md text-capitalize ml-2'
                    >
                        generate
                    </button>

                </div>

            </form>

            <article>
                {
                    data.map((paragraph,i) => {
                        return(
                            <>
                                <p key={i} className='lead p-2'>
                                    {paragraph}
                                </p>

                                <hr/>
                            </>
                        )
                    })
                }
            </article>
            
        </>
    )
}

export default App;