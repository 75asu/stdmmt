import React from 'react';
import ReactMarkdown from "markdown-to-jsx";
import markdown from "./syllabus.md";
import { Box, Typography } from '@mui/material';


export default function Syllabus() {
  let [readable, setReadable] = React.useState({ md: "" });

  React.useEffect(() => {
    fetch(markdown)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <div>
        <Box 
            display='flex' 
            flexDirection='column' 
            alignItems='center' 
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={5}
        >
            <Typography variant='h4'>Project Workflow</Typography>
            <Typography variant='h6'>
                 It's a CRUD application made with MERN stack with end to end functionalities as well as deployment that enables the app to be available in public internet.

 Below are the steps taken to build the project.
                <ReactMarkdown 
                    children={readable.md}
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center'
                />
            </Typography>
        </Box>
      
    </div>
  );
}