import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";

import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <div>
        <h2>Example App</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? "active" : undefined}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
