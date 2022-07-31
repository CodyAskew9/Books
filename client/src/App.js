import Home from './component/home/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './component/Nav/Nav';
import Profile from './component/profiles/profile';


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Profile' exact component={Profile} />
        <Route path='/CheckOut' exact component={Home} />
        <Route path='/Return' exact component={Home} />
        <Route path='/Login' exact component={Home} />
       </Routes>

    </div>
    </Router>
  );
}


export default App;
