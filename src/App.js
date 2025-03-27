import React from "react";
import Home from "./components/remote-job/Home";
import { JobDescription } from "./components/remote-job/job-description";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from "./components/remote-job/login";
import SignUp from "./components/remote-job/signup";
import Apply from "./components/remote-job/Apply";
import PostJob from "./components/remote-job/Post-Job";


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-description/:id" element={<JobDescription />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;