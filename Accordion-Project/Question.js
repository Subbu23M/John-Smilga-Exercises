import React,{useState} from 'react';

function Question(props) {
    // Object Destructuring - ES6
    const{title,info} = props;

    // State variable & function
    const[show,setShow] = useState(false);

    return (
        <div className="card">

            <div className="card-body">

                <h3 className='text-dark'>
                    {title}
                </h3>

                <button className='btn btn-primary' onClick={function(){setShow(!show)}}>
                    {/* Conditional Rendering - Ternary Operator */}
                    {
                        (show) ?  '-' : '+'
                    }
                </button>

                {/* Conditional Rendering - Simple...if */}
                {
                    (show) && <p className='lead'> {info} </p>
                }

            </div>

        </div>
    )
}

export default Question;