import React, { useState } from "react";
function TodoItem(props)
{
    const[isDone,setIsDone]=useState(false);
    function handleClick()
{
    setIsDone(previtem=>{
        return !previtem;
    })
}
    return <li  onClick={handleClick} style={{cursor:"pointer", textDecoration:isDone ? "line-through" : "none"}}>
    {props.item}</li>;
}

export default TodoItem; 