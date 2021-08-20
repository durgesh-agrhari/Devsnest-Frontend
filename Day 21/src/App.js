import './App.css';
import CreateItem from './CreateItem';
import ItemsList from './ItemsList';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
    
    const addItem = (name, calories) => {
        setItems([...items, {name: name, calories: calories}]);
    }

    const updateItem = (prevName, newName, calories) => {
        const index = items.findIndex((item) => item.name === prevName);
        items[index].name = newName;
        items[index].calories = calories;
        setItems(items);
    }

    const deleteItem = (name) => {
        setItems(items.filter((item) => item.name !== name));
    }


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <CreateItem addItem={addItem}/>
        <ItemsList items={items} updateItem={updateItem} deleteItem={deleteItem}/>
        </div>
      </header>
    </div>
  );
}

export default App;
