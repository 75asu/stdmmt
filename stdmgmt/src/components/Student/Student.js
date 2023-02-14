import React from 'react';
import Button from '@mui/material/Button';
import './Student.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Student = (props) =>  {
    const { _id, name, batch, year, hons, hosteller, image } = props.student;
    // delete handler
    const history = useNavigate();
    const deleteHandler = () => {
        axios.delete(`https://api-stdmgmt.measutosh.repl.co/students/${_id}`)
        .then(res => res.data)
        .then(() => history("/"))
        .then(() => history("/all"));
    }
    return (
            <div className="card">
                <img src={image} alt={name} />
                <h2>Name: {name}</h2>
                <h3>Batch : {batch}</h3>
                <h4>Year : {year}</h4>
                <h4>Honors : {hons}</h4>
                <h4>Hosteller : { hosteller === true ? "Yes" : "No" }</h4>
                <Button LinkComponent={Link} to={`/all/${_id}`} sx={{mt: "auto"}}variant="outlined">Update</Button>
                <Button onClick={deleteHandler} sx={{mt: "auto"}}variant="outlined">Delete</Button>
            </div>
    );
};

export default Student;
// 