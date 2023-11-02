import React, {useState} from "react";
import TodoItem from "./TodoItem";
function App() {
    const[newItem,setNewItem]=useState("");
    const[listArray,setListArray]=useState([]);
    function handleChange(event)
    {
         setNewItem(event.target.value);
    }
    function handleClick()
    {
        setNewItem(newItem);
        setListArray(prevItems => {
            return [...prevItems,newItem];
        })
        setNewItem("");
    }
    var count=0;
      return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" placeholder="new item" value={newItem} />
        <button onClick={handleClick} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((listitem) =>{
            return <TodoItem key={count++}
            item={listitem}/>;
          })} 
        </ul>
      </div>
    </div>
  );
}

export default App;
