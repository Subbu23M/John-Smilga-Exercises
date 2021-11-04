import React from 'react';

function MenuItems(props) {
    // Object Destructuring - ES6
    const{data} = props;

    return (
        <>

            <div className="container">

                <div className="row mt-2">

                    {
                        data.map(function(item){
                            // Object Destructuring - ES6
                            const{id,title,price,img,desc} = item;

                            return(
                                <div className="col-lg-4 my-2" key={id}>

                                    <div className="card">

                                        <img 
                                            src={img}
                                            alt={title}
                                            className='img-fluid img-thumbnail' 
                                        />

                                        <div className="card-body d-flex justify-content-between align-items-center">

                                            <h4 className='card-title text-capitalize text-primary'>
                                                {title}
                                            </h4>

                                            <h5 className='text-warning'>
                                                ${price}
                                            </h5>

                                        </div>

                                        <div className="card-footer">

                                            <p className='lead'>
                                                {desc}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default MenuItems;