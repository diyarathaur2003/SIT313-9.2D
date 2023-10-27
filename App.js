import './App.css';
import {Authent} from './Authentication';
import Signup from './Signup';
import Login from './Login';
import Webpage from './Webpage';
import Web from './Web';
import Post from './post';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Planpage from './Planpage.js';
import Th from './Th';


function App() {
  return (
    <div className="container">
      <Router>
        <Authent>
          <Routes>
            <Route path="/" element={<Webpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/web" element={<Web />} />
            <Route path="/post" element={<Post />} />
            <Route path="/th" element={<Th />} />
            
            <Route path="/planpage" element={<Planpage />} />
            {/* Add the route for Planpage */}
            
            
          </Routes>
        </Authent>
      </Router>
    </div>
  );
}
export default App;
