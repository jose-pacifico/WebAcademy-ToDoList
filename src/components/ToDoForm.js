import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/todo-list.slice';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <input
            type="text"
            className='form-control'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Informe uma nova tarefa..."
            />
        <button className="btn btn-success" type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
