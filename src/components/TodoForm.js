import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('')
  }


  return (
    <React.Fragment>
      <form className="todo_form" onSubmit={handleSubmit}>
        {props.edit ?
          (<React.Fragment>
            <input
              className='todo_input edit'
              name='text'
              value={input}
              onChange={handleChange}
              ref={formRef}
              placeholder='Update your todo'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update todo
            </button>
          </React.Fragment>) :
          (<React.Fragment>
            <input
              className='todo_input'
              name='text'
              value={input}
              onChange={handleChange}
              ref={formRef}
              placeholder='Add a todo'
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add new todo
              </button>
          </React.Fragment>)
        }
      </form>
    </React.Fragment>
  )
}

export default TodoForm
