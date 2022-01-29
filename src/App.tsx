import { VFC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'
import { Layout } from './components/Layout'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/fetch-a" element={<ClassicalFetchA />}></Route>
            <Route path="/fetch-b" element={<ClassicalFetchB />}></Route>
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  )
}

export default App
