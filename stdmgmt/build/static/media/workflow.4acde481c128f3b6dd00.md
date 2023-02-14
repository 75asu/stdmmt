<markdown>

>>> # Project Setup
- npm install -g create-react-app
- npx create-react-app stdmgmt
- remove the boilerplate code from app.js
- remove reportwebvitals from index.js
- install material ui and icons library
    - npm install @mui/material @emotion/react @emotion/styled
    - npm install @mui/icons-material
- npm install react-router-dom@6
- now create the folder structure for the app
    - naming conventions during the folder structure


>>> # Backend Development
- npm init
- npm i nodemon
- add start command in package.json
- create app.js -> test hello world from the file by running npm start
- npm i express
- npm i mongoose
- setup a mongodb database
    - user setup - admin : EzNaL4SNVj4OZl2z : readwritetoanydatabase
    - network access setup - allow from everywhere
- create connection with db using mongoose in app.js
- add basic route to test
- add folder structure
- ROUTER
    - import express router
    - add route for homepath
  
- MODEL
    - setup the schema for Student and export it to mongodb
    - then import it to use it in the route file
    - in route file put thelogic to print all profiles and export the
    - remove the test route from app.js
    - import the routes and use it in app.js
  
- CONTROLLER
    - create controller to handle multiple routes
    - cut the functionalities from student-route and paste here
    - import the controller in routes and use it
  
- follow the process to add anorher function to add student
- add the express.json to convert all the data to json before sending to the database
- test with REQBIN with a dummy post request
- add another route to filter by id
- add another route and logic to update a profile
    

>>> # Frontend Development
- start with Header in Header.js and use it in App.js
    - navbar, icon, tabs, links
- add routes for links in app.js
- add header and main in app.js
- add routes for addstudent, home, students, syllabus, about in app.js
- STUDENTS
    - create url to fetch from axios
    - fetch the data and use in useEffect()
    - return the data in a table
    - use a prop(i) as key in the div of table
    - render single book component from Student.js
  
- STUDENT
    - it will consume the props sent from Students.js
    - return all the properties of student in html with update and delete button
    - run test
    - add a css file for all students

      
>>> # Connecting Frontend With Backend
- AddStudent
    - create a form to take up the user data
    - to handle the useState variable will be required
    - use the previous state to filter values
    - work on the checkbox individually
        - add usestate
        - modify the control checked in formacontrol back to the variable checked, add onchange to the control with an event to upadate the setChcked value to the opposite of checked
    - add logic for handleSubmit
    - add logic to send the data to database in sendRequest
    - connect handlesubmit and sendrequest
    - add useNavigate and history
- UPDATE
    - add route for it in app.js
    - useEffect, useParams in studentdetails
    - adjust the update button in Student.js to trigger event
    - add the form to show once the update button
    - add useState to fix the details information
    - add the ".then" function once usestate is setup
    - add the handleSubmit function
    - add handleChange
    - add validation for form
    - once all the then statements are in place then test
    - use inputHandler and handleChange to grab and use the changes made in textbox
    - after this test the mutability of the values in page
    - UPDATE the Log
        - create sendRequest function to send the data and lead to the main page once update is done
        - call the sendrequest from handlesubmit
- DELETE
    - setup the delete button in student.js
    - write Handler for delete with useNavigate

</markdown>