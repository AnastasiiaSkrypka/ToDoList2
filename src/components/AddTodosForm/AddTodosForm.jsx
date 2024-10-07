import styles from './AddTodosForm.module.css';

// const mapStatetoProps = (state) => {
//   return { todos: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { addTodos: (obj) => dispatch(addTodos(obj)) };
// };

const AddTodosForm = (props) => {
  //   const dispatch = useDispatch();
  // const [todo, setTodo] = useState('');

  // const handleChange = (event) => {
  //   setTodo(event.target.value);
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const todo = event.currentTarget.elements.todo.value;

    const formData = {
      todo,
      date: new Date().toLocaleString(),
    };

    props.handleAddTodos(formData);
    event.currentTarget.reset();
  };

  return (
    <>
      <title className={styles.formTitle}>To do list</title>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Please add a new task"
          name="todo"
          className={styles.formInput}
        />

        <button type="submit" className={styles.formAddBtn}>
          Add task
        </button>
      </form>
    </>
  );
};

export default AddTodosForm;
