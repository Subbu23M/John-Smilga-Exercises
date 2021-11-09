import React,{useState,useEffect} from 'react';

import List from './List';

import Alert from './Alert';

// To store data in Browser API - Local Storage
const getLocalStorage = ()=>{
    // Declared & Assigned
    let list = localStorage.getItem('list');

    // Ternary Operator
    const result = (list) ? JSON.parse(localStorage.getItem('list')) : [];
    return result;
}

function App(props) {

    // state variable & function
    const[name,setName] = useState('');

    const[list,setList] = useState(getLocalStorage());

    const [alert,setAlert] = useState({
        show:false,
        message:'',
        type:''
    });

    // For Button
    const[isEditing,setIsEditing] = useState(false);

    const[editId,setEditId] = useState(null);

    // Event Handler as callback function-1
    const handleSubmit = (e) => {
        // To stop browser to reload
        e.preventDefault();

        if(!name){
            // Invoke function
            showAlert(true,'please add items','danger')
        }else if(name && isEditing){
            const result = list.map((ele)=>{
                if(ele.id === editId){
                    return {...ele,title:name}
                }else{
                    return ele;
                }
            })

            // Invoke state function
            setList(result);

            // To reset form
            setName('');

            // Invoke state function
            setEditId(null);
            setIsEditing(false);

            showAlert(true,'item is updated','success');
        }else{
            // Invoke function
            showAlert(true,'your item is added','warning');

            // Creating Object
            const newItem = {
                id:new Date().getTime().toString(),
                title:name
            }

            // Invoke state function - adding new object to array
            setList([...list,newItem]);

            // To reset form
            setName('');
        }
    }

    // Helper function
    const showAlert = (show=false,message='',type='') => {
        // Invoke State function ES6-Concise property
        setAlert({show,message,type})
    }

    // Event Handler as callback function-2
    const handleName = (e) => {
        const inputValue = e.target.value;
        
        // Invoke state function
        setName(inputValue);
    }

    // Event Handler as callback function-3
    const handleClearItems = () =>{
        // Invoke function
        showAlert(true, 'your cart is empty','danger' );
        
        // Invoke state function
        setList([]);
    }

    // Event Handler as callback function-4 
    const removeItem = (id) => {
        // Invoke function
        showAlert(true,'item is removed','danger');

        // removeItem
        const removeItem = list.filter((ele) =>{
            if(ele.id !== id){
                return true;
            }
        })

        // Invoke state function
        setList(removeItem);
    }

    // Event Handler as callback function-5
    const editItem = (id) =>{
        const specificItem = list.find((ele)=>{
            if(ele.id === id){
                return true;
            }
        })

        // Invoke state function
        setIsEditing(true); //to update button text
        setEditId(id); //to collect id

        setName(specificItem.title);
    }

    // When user refreshed data should store in Browser API
    const useFunc = function(){
        localStorage.setItem('list',JSON.stringify(list))
    }

    // Invoke useEffect hook
    useEffect(useFunc,[list]);

    return (

        <>
            <h2 className='text-center text-capitalize text-success mt-2'>
                grocery bud
            </h2>

            <div className='row'>

                <div className='col-lg-8 bg-light p-3 text-center mt-3 mx-auto'>

                    <form>

                        {/* Conditional Rendering - Simple..if */}
                        {
                            (alert.show) && <Alert {...alert} removeAlert={showAlert} list={list} />
                        }

                        {/* 1 */}
                        <div className='form-group d-flex justify-content-center'>

                            <input
                                type='text'
                                className='form-control'
                                placeholder='eg: bananas'
                                value={name}
                                onChange={handleName}
                            />

                            <button 
                                className='btn btn-danger text-capitalize ml-2 btn-sm'  
                                type='submit' 
                                onClick={handleSubmit}
                            >
                                {/* Conditional Rendering - Ternary Operator */}
                                {
                                    (isEditing) ? 'edit' : 'submit'
                                }
                            </button>

                        </div>

                    </form>

                    {/* Conditional Rendering - Simple...if */}
                    {
                        (list.length > 0) && (
                            <>
                                <List
                                    list={list}
                                    removeItem={removeItem}
                                    editItem={editItem}
                                />

                                <button className='btn btn-block btn-primary my-3' onClick={handleClearItems}>
                                    clear items
                                </button>
                            </>
                        )                                                
                    }

                </div>
            
            </div>
        </>
    )
}

export default App;