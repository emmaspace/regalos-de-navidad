import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home/Home';
import SignUp from './Prueba/SignUp';
import LogIn from './Prueba/LogIn';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
