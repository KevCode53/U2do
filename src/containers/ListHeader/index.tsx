// import styles from './styles.module.css'

import CounterTodo from '../../components/CounterTodo'
import SearchTodo from '../../components/SearchTodo'

const index = () => {
  return (
    <header className="">
      <CounterTodo />
      <SearchTodo />
    </header>
  );
}

export default index;