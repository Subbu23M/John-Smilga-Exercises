import React from 'react';

function List(props){
    // Object Destructuring - ES6
    const{list,removeItem,editItem} = props;

    return(
        <>
            {
                list.map((ele) =>{
                    // Object Destructuring - ES6
                    const{id,title} = ele;

                    return(
                        <article key={id} className='btn-container d-flex justify-content-between align-items-center'>

                            <h6 className='text-capitalize'>
                                {title}
                            </h6>

                            <div className='ml-2'>

                                <button className='btn btn-sm' onClick={() => {editItem(id)}}>
                                    <i className="far fa-edit fa-2x text-success"></i>    
                                </button>

                                <button className='btn btn-sm' onClick={() =>{removeItem(id)}}>
                                    <i className="fas fa-trash fa-2x text-danger"></i>
                                </button>

                            </div>

                        </article>
                    )
                })
            }

        </>
    )
}
export default List;