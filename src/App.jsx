// import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import AddTodosForm from './components/AddTodosForm/AddTodosForm';
import { addTodo, removeTodo } from './redux/todos/todosSlice';

const App = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (formData) => {
    const finalTodo = {
      ...formData,
      id: Math.random().toString(),
    };
    const action = addTodo(finalTodo);
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = removeTodo(todoId);
    dispatch(action);
  };

  return (
    <>
      <AddTodosForm />;
      
    </>
  );
};
export default App;
