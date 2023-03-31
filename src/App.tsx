
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Layout from './containers/Layout'
import Workspaces from './routes/workspaces'
import DetailWorkspace from './routes/DetailWorkspace'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element="" />
          <Route path='/workspaces' >
            <Route index element={<Workspaces />} />
            <Route path=':id' element={<DetailWorkspace/>} />
          </Route>
          <Route path='*' element={<h2>404 not found</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
