import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Student from './Student';
import "./Student.css";
// const URL = "https://api-stdmgmt.measutosh.repl.co/students";
// const URL = "https://api-stdmgmt.netlify.app/students";

const fetchHandler = async() => {
    return await axios.get("/students")
        .then((res) => res.data);
        
}

const Students = () => {
    // useEffect runs after the component is rendered into the browser
    // it runs only once
    // if the dependency array changes then it will reload
    const [students, setStudents] = useState();
    useEffect(() => {
        fetchHandler()
        .then(data => setStudents(data.students))
    }, []);
    return <ul>
            {students && students.map((student, i) => (
                <li key={i}>
                    {/** this student information comes from the Student.js */}
                    <Student student={ student }/>
                </li>
            ))}
        </ul>
}

export default Students