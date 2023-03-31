import styles from './main.module.css'


import Navbar from './containers/Navbar'
import Layout from './containers/Layout'


function App() {

  return (
    <>
      <header className='headerContainer'>
        <Navbar/>
      </header>
      <Layout />
    </>
  )
}

export default App
