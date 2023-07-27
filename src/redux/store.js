import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './features/todo-list.slice';

export default configureStore({
  reducer: {
    todos: todoListReducer,
  },
});
