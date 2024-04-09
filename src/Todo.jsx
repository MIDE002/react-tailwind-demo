import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [Addtask, setAddTask] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTask = () => {
    if (input !== '') {
      setAddTask([...Addtask, input]);
      setInput('');
    }
  };

  

  return (
    <>
      <h1>BEST TO DO APP</h1>

      <input
        type="text"
        name='input'
        placeholder='new task'
        value={input}
        onChange={handleInputChange}
      />
      <button
        type='button'
        onClick={handleAddTask}
      >
        ADD TASKS
      </button>

      <div><h3>Tasks</h3></div>

      <ul>
        {Addtask.map((task, index) => (
          <li 
          key={index}>{task}
        <p>
          <button>delete</button>
          <button>edit</button>

        </p>

          </li>
        ))}
      </ul>
    </>
    
  )
}

export default Todo;
