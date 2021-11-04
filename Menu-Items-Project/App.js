import React,{useState} from 'react';

import Categories from './Categories';

import MenuItems from './MenuItems';

import menu from './menu';

// collect the unique categories - ES6
const allCategories = ['all',...new Set(menu.map(function(item){
    return item.category
}))] 
// console.log(allCategories);

function App(props) {
    // State variable & function
    const[items,setItems] = useState(menu);

    const[categories] = useState(allCategories);

    // filter items
    const filterItems = function(item){
        // Conditional Rendering - Simple..if
        if(item === 'all') {
            // Invoke state function
            setItems(menu);
            return;
        } 

        const newItems = menu.filter(function(itemm){
            if(itemm.category === item){
                return true;
            }
        })
        // Invoke state function
        setItems(newItems);
    }

    return (
        <>

            <h2 className='text-capitalize text-center text-info mt-2'>
                our menu 
            </h2>

            {/* Child Component Instances */}
            <Categories
                filterItems={filterItems}
                categories={categories}
            />

            <MenuItems
                data={items}
            />
            
        </>
    )
}

export default App;