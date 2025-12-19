import {Routes, Route} from 'react-router-dom'

import './App.css'
import IpoList from './components/IpoList'
import IpoDetailView from './components/IpoDetailView'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<IpoList />} />
        <Route exact path="/ipos/:id" element={<IpoDetailView />} />
      </Routes>
    </div>
  )
}

export default App
