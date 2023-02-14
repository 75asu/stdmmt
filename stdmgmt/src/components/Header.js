import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';
import Groups2Icon from '@mui/icons-material/Groups2';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            {/* passing the prop as position */}
            <AppBar 
                position='sticky'
                sx={{ backgroundColor:"rebeccapurple"}}>
                {/* typography component is from material-ui  */}
                {/* it will help to render any content into appbar component*/}
                {/* Toolbar adds the navbar type feel */}
                <Toolbar>
                    <NavLink to="/" style ={{color: "white"}}>
                        <Typography>
                            <Groups2Icon />
                        </Typography>
                    </NavLink>
                    {/** value=0 will select the 1st button by default */}
                    {/** but the value should change dynamically everytime */}
                    {/** for that purpose react state and onChange prop will be used */}
                    {/** onchange gets an event, in this case it's a click */}
                    <Tabs 
                        // sx allows to write css inside a component
                        sx={{ml:"auto"}}
                        textColor="inherit" 
                        indicatorColor="primary" 
                        value={value} 
                        onChange={(e, val) => setValue(val)}
                     >
                        <Tab LinkComponent={ NavLink } to="/all" label='All Students' />
                        <Tab LinkComponent={ NavLink } to="/add" label='Add Student' />
                        <Tab LinkComponent={ NavLink } to="/syllabus" label='Syllabus' />
                        <Tab LinkComponent={ NavLink } to="/about" label='About' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        
        </div>
    )
}

export default Header;