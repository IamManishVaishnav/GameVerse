import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetail from './pages/gamedetail';
import Library from './pages/library';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className='w-full min-h-screen bg-gradient-to-b no-scrollbar from-[#333333] to-[#1E3A8A]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
