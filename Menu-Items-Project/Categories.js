import React from 'react';

function Categories(props) {
    // Object Destructuring - Es6
    const{filterItems,categories} = props;

    return (
        <>
            {
                categories.map(function(ele,i){
                    return(
                        <button
                            key={i}
                            type='button'
                            className='btn btn-outline-secondary btn-md text-capitalize mt-2 left'
                            onClick={function(){filterItems(ele)}}
                        >
                            {ele}
                        </button>
                    )
                })
            }
            
        </>
    )
}

export default Categories;