import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h2>Cars</h2>
        <ul>
          <li>
            <Link to="/BMW">BMW</Link>
          </li>
          <li>
            <Link to="/Mercedes">Mercedes</Link>
          </li>
          <li>
            <Link to="/VOLVO">VOLVO</Link>
          </li>
          <li>
            <Link to="/VAZ-2107">VAZ-2107</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
