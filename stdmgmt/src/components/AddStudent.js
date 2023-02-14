import React, { useState } from 'react';
import { TextField, FormLabel, Button } from '@mui/material';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    // useNavigate helps to send different things to different url
    const history = useNavigate();
    // initial variable will contain an object
    
    const [inputs, setInputs] = useState({
        name: '',
        batch: 0,
        year: 0,
        hons: '',
        image: ''
    })

    // to handle the checkbox
    const [checked, setChecked] = useState(false);
    // event will be thrown to the function whenever an input will change = ES6
    const handleChange = (e) => {
        // grab the previous state and filter values from there
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }


    // to send the data to the database
    //  async function, awaits till request is done, then gets res variable as a callback variable
    //  then it will send it as res.data
    const sendRequest = async () => {
        await axios.post("https://api-stdmgmt.measutosh.repl.co/students", {
            name: String(inputs.name),
            batch: Number(inputs.batch),
            year: Number(inputs.year),
            hons: String(inputs.hons),
            hosteller: Boolean(inputs.hosteller),
            image: String(inputs.image)
             
        })
        .then(res => res.data);
    }

    // to handle all the submits
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => history('/all'))
    }

    
    return <form onSubmit={handleSubmit}>
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    justifyContent={"center"} 
                    maxWidth={500}
                    alignContent={"center"}
                    alignSelf="center"
                    marginLeft={"auto"}
                    marginRight="auto"
                    marginTop={5}
                >
                    
                    <FormLabel>Name</FormLabel>
                    <TextField value={ inputs.name } onChange={ handleChange } size="small" margin="normal" fullWidth variant ="outlined" name="name" />
                    <FormLabel>Batch</FormLabel>
                    <TextField value={ inputs.batch } onChange={ handleChange } size="small" type="number" margin="normal" fullWidth variant ="outlined" name="batch" />
                    <FormLabel>Year</FormLabel>
                    <TextField value={ inputs.year } onChange={ handleChange } size="small" type="number" margin="normal" fullWidth variant ="outlined" name="year" />
                    <FormLabel>honors</FormLabel>
                    <TextField value={ inputs.hons } onChange={ handleChange } size="small" type="string" margin="normal" fullWidth variant ="outlined" name="hons" />
                    <FormLabel>Image</FormLabel>
                    <TextField value={ inputs.image } onChange={ handleChange } size="small" margin="normal" fullWidth variant ="outlined" name="image" />
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={checked} 
                                onChange={() => setChecked(!checked)} 
                            />
                        } 
                        label="Hosteller" 
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                    >Add Student Log</Button>
                
                </Box>
        
    </form>
}

export default AddStudent