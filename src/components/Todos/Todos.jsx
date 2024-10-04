import { useState } from 'react';
import styles from './Todos.module.css';

const Todos = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  //   console.log('todotext', todo);

  return (
    <section className={styles.formSection}>
      <title className={styles.formTitle}>To do list</title>
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        className={styles.formInput}
      />

      <button className={styles.formAddBtn}>Add task</button>
    </section>
  );
};

export default Todos;
