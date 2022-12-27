import React, { useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialState = [ 
    {
        id: uuidv4(),
        name: 'Study React',
        isCompleted: false
    }
]

const reducer = (state, action) => {
   if(action.type === 'ADD_TODO') {
    console.log('Add Reducer')
    const {name} = action.payload
    return [
      ...state, 
      {
        id: uuidv4(),
        name,
        isCompleted: false
      }
    ]
   }
   if(action.type ==='TOGGLE_IS_COMPLETED') {
    console.log('Toggle completed')
    const {id} = action.payload
    const newState = state.map((singleTodo) => {
      if (singleTodo === id) {
      return {...singleTodo, isCompleted: !singleTodo.isCompleted}
      }
      return singleTodo
    })
    return newState
   }
   return state;
}

const Todo = () => {
  const [todoText, setTodoText] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => setTodoText(e.target.value)
  const handleClick = () => {
    dispatch ({
      type: "ADD_TODO",
      payload: { name: todoText }
    })
  }

  const handleToggle = (id) => {
    dispatch ({
      type: "TOGGLE_IS_COMPLETED",
      payload: { id }
    })
  }
  return (
    <>
    <h3>Add new Todo</h3>
    <div>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>
    </div>
    <h3>List Todo</h3>
    <ul>
      {
        state.map(({name, isCompleted, id}) => {
          const style = {
            textDecoration: isCompleted ? 'line-through' : 'inherit'
          }
          return (
            <li key={id} style={style} onClick={() => handleToggle(id)}> {name}</li>
          )
        })
      }
    </ul>
    </>
  )
}

export default Todo