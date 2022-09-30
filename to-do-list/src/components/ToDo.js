import {useState} from 'react'

export default function ToDo({ item, onUpdate, onDelete }) {
  
  const [isEdit, setIsEdit] = useState(false)

  function FormEdit() {

    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit(e) {
      e.preventDefault()

    }
    function handleChange(e) {
      setNewValue(e.target.value)
    }
    function handleClick(e) {
      onUpdate(item.id, newValue)
      setIsEdit(false)
    }

    return (
      <form className='toDoUpdateForm' onSubmit={handleSubmit}>
        <input className='toDoInput' type='text' onChange={handleChange} value={newValue} />
        <button className='button' onClick={ handleClick}>Update</button>
      </form>
    )
  }
  function ToDoElement() {
    return (
      <div className='toDoInfo'>
          <span className='toDoTitle'>{item.title}</span>
          <button className='button' onClick={() => setIsEdit(true)} >Edit</button>
          <button className='buttonDelete' onClick={(e) => onDelete(item.id)}>Delete</button>
        </div>
    )
  }

  return (
      <div className='toDo'>
        {isEdit ? <FormEdit /> : <ToDoElement />}
      </div>
  )
}