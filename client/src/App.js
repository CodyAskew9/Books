import Home from './component/home/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from './component/Nav/Nav';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path='/' exact component={Home}  />
       </Routes>

    </div>
    </Router>
  );
}

export default App;
