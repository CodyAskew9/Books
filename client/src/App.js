import Home from './component/home/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './component/Nav/Nav';
import Profile from '././component/profiles/profile'


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profiles' element={<Profile />} />
        <Route path='/CheckOut' element={<Home />} />
        <Route path='/Return' element={<Home />} />
        <Route path='/Login' element={<Home />} />
       </Routes>

    </div>
    </Router>
  );
}



export default App;
