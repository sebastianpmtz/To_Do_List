import {useState} from 'react'
import ToDo from './ToDo'
import './ToDoApp.css'

export default function ToDoApp() {

  const [title, setTitle] = useState('')
  const [toDos, setToDos] = useState([])
  
  // function handleClick(e) {
  //   e.preventDefault()
  //   setTitle('Sebastian')
  // }
  function handleChange(e) {
    const value = e.target.value
    setTitle(value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    setToDos([...toDos, newToDo])
    setTitle('')
  }
  function handleUpdate(id, value) {
    const temp = [...toDos]
    const item = temp.find((item) => item.id === id)
    item.title = value
    setToDos(temp)
  }
  function handleDelete(id) {
    const temp = toDos.filter(i => i.id !== id)
    setToDos(temp)
  }

  return (
    <div className='toDoContainer'>
      <form className='toDoCreateForm' onSubmit={ handleSubmit } >
        <input onChange={ handleChange } className='toDoInput' value={ title} />
        <input onClick={ handleSubmit } className='buttonCreate' type='submit' value='Create to do...' />
      </form>
      <div className='toDosContainer'>
        {toDos.map(item => (
          <ToDo key={item.id} item={item} onUpdate={ handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}