import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import Students from './components/Student/Students';
import StudentDetails from './components/Student/StudentDetails';
import Syllabus from './components/Syllabus';
import About from './components/About';


function App() {
  return <React.Fragment>
              <header>
                  <Header />
              </header>
              <main>
                  <Routes>
                      <Route path="/" element={ <Home /> } exact />            
                      <Route path="/add" element={ <AddStudent /> } exact /> 
                      <Route path="/all" element={ <Students /> } exact />
                      <Route path="/syllabus" element={ <Syllabus /> } exact /> 
                      <Route path="/about" element={ <About /> } exact /> 
                      <Route path="/all/:id" element={ <StudentDetails /> } exact /> 
                  </Routes>
              </main>
          </React.Fragment>
}

export default App;
