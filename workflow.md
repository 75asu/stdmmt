## Step By Step Process


#### Backend Package
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
    