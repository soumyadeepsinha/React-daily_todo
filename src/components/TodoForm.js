import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <React.Fragment>
      <form className="todo_form" onSubmit={handleSubmit}>
        <input
          className='todo_input'
          name='text'
          value={input}
          onChange={handleChange}
          // ref={inputRef}
          placeholder='Add a todo'
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
          </button>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;
