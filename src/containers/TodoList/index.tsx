import styles from './styles.module.css'

import TodoItem from '../../components/TodoItem'

import { todos } from '../../utilities/data';


const index = () => {
  return (
    <article>
      <ul className={styles.listContainer}>
        {todos.map(({id, text, complete}) => (
          <TodoItem key={id} text={text} complete={complete}/>
        ))}
      </ul>
    </article>
  );
}

export default index;