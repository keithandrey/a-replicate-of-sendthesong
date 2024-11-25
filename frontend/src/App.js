import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Browse from "./pages/Browse"
import Submit from "./pages/Submit"
import Message from "./pages/Message"
import Support from "./pages/Support"

import Navbar from "./components/Navbar"

import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<Message/>}/>
            <Route path="/submit" element={<Submit/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/browse/:recipient" element={<Browse/>}/>
            <Route path="/support" element={<Support/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;