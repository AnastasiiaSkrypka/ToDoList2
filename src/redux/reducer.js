import { createSlice } from '@reduxjs/toolkit';

const initialState = {
//   todos: [],
  //   productDetails: null,
  //   status: STATUSES.idle, // "idle" | "pending" | "success" | "error"
  //   error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTodos } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
