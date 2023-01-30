import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './Start';
import FIJHome from './components/farinjim/FIJHome';
import FIJVideos from './components/farinjim/FIJVideos';
import FIJAudio from './components/farinjim/FIJAudio';
import SongsHome from './components/songs5000/5000Home';
import SongsPageA from './components/songs5000/5000PageA';
import SongsPageB from './components/songs5000/5000PageB';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Start />} />
            
          <Route path="FaRiNjIm" element={<FIJHome/>} >
            <Route index element={<FIJHome />} />
            <Route path="FIJAudio" element={<FIJAudio />} />
            <Route path="FIJVideos" element={<FIJVideos />} />
          </Route>  

          <Route path="Songs5000" element={<SongsHome/>} >
            <Route index element={<SongsHome />} />
            <Route path="sOnGsPageA" element={<SongsPageA/>} />
            <Route path="sOnGsPageB" element={<SongsPageB/>} />
          </Route>  

          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
