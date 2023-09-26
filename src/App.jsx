import './App.css'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from './components/Listing'
import Videoplayer from './components/Videoplayer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/videos" element={<Listing />} />
          <Route path="/videos/:id" element={<Videoplayer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
