import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'animate.css'
import './App.css'
import './Hover.css'
//import ScrollToTop from './components/ScrollTop'
import CreateOptions from './pages/CreateOptions/CreateOptions'
import CreateSingle from './pages/CreateSingle/CreateSingle'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CreateOptions />} />
          <Route path="/single" element={<CreateSingle />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
