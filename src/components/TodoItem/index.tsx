import styles from './styles.module.css'

const index = (
  {id, text, complete}:
  {
    id: number,
    text: string,
    complete:boolean
  }) => {
  return (
    <li className={styles.todoItem}>
      <input type="checkbox" />
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export default index;