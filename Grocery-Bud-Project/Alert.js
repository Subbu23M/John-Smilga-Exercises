import React,{useEffect} from 'react';

function Alert(props) {
    // Object Destructuring - ES6
    const{message,type,removeAlert,list} = props;

    // callback function
    const useFunc = function(){
        const timeOut = setTimeout(function(){
            // Invoke function
            removeAlert()
        },2000)

        return function(){
            clearTimeout(timeOut);
        }
    }

    // Invoke useEffect Hook
    useEffect(useFunc,[list]);

    return (
        <>
            <p className={`text-${type} lead text-capitalize`}>
                {message}
            </p>
        </>
    )
}
export default Alert;