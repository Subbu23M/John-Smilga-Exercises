import React,{useState} from 'react';

function Tour(props) {
    // Object Destructuring - ES6
    const{id,name,info,image,price,removeTour} = props;

    const[readMore,setReadMore] = useState(false);

    // Event Handler as callback function
    const handleClick = function(){
        // Invoke state function
        setReadMore(!readMore);
    }

    return (
        <div className="card mx-auto my-3" style={{width:'50%'}}>

            <img 
                src={image} 
                alt={name}
                className='card-img-top img-thumbnail'
            />

            <div className="card-body">

                <h4 className='card-title text-warning'>
                    {name}
                </h4>

                <h5 className='text-secondary'>
                    ${price}
                </h5>

                <p className='card-text lead'>
                    {/* Conditional Rendering - Ternary Operator */}
                    {
                        (readMore) ? info : `${info.substring(0,220)}...`
                    }
                    <button onClick={handleClick} className='btn btn-secondary text-light btn-sm ml-2'>
                        {
                            (readMore) ? 'show less' : 'read more'
                        }
                    </button>
                </p>

            </div>

            <div className="card-footer">
                <button className='btn btn-primary btn-block' onClick={function(){
                    removeTour(id)
                }}>
                    not interested 
                </button>
            </div>

        </div>
    )
}

export default Tour;