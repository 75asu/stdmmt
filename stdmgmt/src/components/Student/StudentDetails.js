import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, FormLabel, Button } from '@mui/material';
import { Box } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    // the input object will stay empty
    // it will be filled dynamically form axios request
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const history = useNavigate();

    
    // get the id from URL using a hook from react router dom
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`/students/${id}`)
            .then((res) => res.data)
                .then(data=>setInputs(data.student));
        };
        fetchHandler()
    }, [id]);

    // to send the updated data to the database
    const sendRequest = async () =>  {
        await axios.put(`/students/${id}`, {
            name: String(inputs.name),
            batch: Number(inputs.batch),
            year: Number(inputs.year),
            hons: String(inputs.hons),
            hosteller: Boolean(inputs.hosteller),
            image: String(inputs.image)
        })
        .then(res => res.data);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest()
            .then(()=>history("/all"));
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    
    return ( 
        <div>
            {/* form is inside expressions
                 when we will have the inputs, only then render the form */}
        {inputs && (
            <form onSubmit={handleSubmit}>
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
                    >Update Student Log</Button>
                
                </Box>
        
    </form>
        )}
        </div>
    )
}

export default StudentDetails