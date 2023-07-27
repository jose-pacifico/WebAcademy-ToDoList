// src/components/TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleComplete } from '../redux/features/todo-list.slice';

const TodoList = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li class="list-group-item d-flex justify-content-between align-items-start" key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
          <p>
            <button
              className="btn btn-success"
              onClick={() =>dispatch(toggleComplete(task.id))}
              disabled={task.completed} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg>
            </button>

            <button 
              className="btn btn-danger" 
              onClick={() => dispatch(removeTask(task.id))} 
              style={{ marginLeft: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                </svg>
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
