// App.js

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Start';
import FIJMenu from './components/farinjim/FIJMenu';
import FIJHello from './components/farinjim/FIJHello';
import FIJLook from './components/farinjim/FIJVideos';
import FIJAudio from './components/farinjim/FIJAudio';
import SongsHome from './components/songs5000/5000Home';
import SongsHello from './components/songs5000/5000Hello';
import SongsPageA from './components/songs5000/5000PageA';
import SongsPageB from './components/songs5000/5000PageB';
import BassHome from './components/speirsybass/SpeirsyBassHome';
import BassHello from './components/speirsybass/SpeirsyBassHello';
import BassBlog from './components/speirsybass/SpeirsyBassBlog';
import BassTherapist from './components/speirsybass/SpeirsyBassTherapist';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Start />} />
            
          <Route path="FaRiNjIm" element={<FIJMenu/>} >
            <Route index element={<FIJHello />} />

            {/* I'm not really sure what's happening here with the index. Or why we need 2 home pages.
            Is that what we have. It sort of seems like it?
            No. It's not. What you have is a kind of
            FIJApp.js ? Andy?  */}

            <Route path="FIJAudio" element={<FIJAudio />} />
            <Route path="FIJVideos" element={<FIJLook />} />
          </Route>  

          <Route path="songs5000" element={<SongsHome/>} >
            <Route index element={<SongsHello />} />
            <Route path="sOnGsPageA" element={<SongsPageA/>} />
            <Route path="sOnGsPageB" element={<SongsPageB/>} />
          </Route>  

          <Route path="speirsybass" element={<BassHome  />} >
            <Route index element={<BassHello />} />
            <Route path="bassblog" element={<BassBlog />} />
            <Route path="therapy" element={<BassTherapist />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
