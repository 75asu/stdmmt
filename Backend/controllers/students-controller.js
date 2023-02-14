//  this contains all the functions to handle all the routes
const Student = require('../model/Student');

const getAllStudents = async (req, res, next) => {
    // to create a collection in mongodb
    // hooks needs to be there then routes
    let students;
    // server side case so always try catch block should be there
    try {
        // the find method from the book schema using mongoose
        // no filter is provided, so it will return all profiles
        students = await Student.find();
    } catch (err) {
        console.log(err);
    }

    if (!students) {
        return res.status(404).json({ message: "No students found" })
    }

    return res.status(200).json({ students });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let student;
    try {
        // findbyid function is provided by mongodb
        student = await Student.findById(id);
    }
    catch (err) {
        console.log(err)
    }

    // validation
    if(!student) {
        return res.status(404).json({ message: "No Student Found" });
    }

    return res.status(201).json({ student });
}

const addStudent = async (req, res, next) => {
    // this will create a new student using the student schema
    const { name, batch, year, hons, hosteller, image } = req.body;
    let student;
    try {
        student = new Student({
            name,
            batch,
            year,
            hons,
            hosteller,
            image
        });

        // to save the student in the database
        await student.save()
    } catch(err) {
        console.log(err);
    }

    // validation
    // 500 - unable to add
    // 201 - created successfully
    if(!student) {
        res.status(500).json({ message: "Unable to add"} );
    }

    return res.status(201).json({ student });
}

const updateStudent = async (req, res, next) => {
    const id = req.params.id;
    // to update mongoose has a function "findbyidandupdate"
    const { name, batch, year, hons, hosteller, image } = req.body;
    let student;
    try {
        // takes id and update query that contains all parameters
        student = await Student.findByIdAndUpdate(id, {
            name,
            batch,
            year,
            hons,
            hosteller,
            image
        });

        student = await student.save()
    }
    catch (err) {
        console.log(err)
    }

    if(!student) {
        res.status(404).json({ message: "Unable to update by this ID"} );
    }

    return res.status(200).json({ student });
}

const deleteStudent = async (req, res, next) => {
    let id = req.params.id;
    let student;
    try {
        // default function "findbyidandremove"
        student = await Student.findByIdAndRemove(id);
    }
    catch (err) {
        console.log(err)
    }

    if(!student) {
        return res.status(404).json({ message: "Unable to delete by this ID" })
    }

    return res.status(200).json({ message: "Student successfully deleted" });
}


exports.getAllStudents = getAllStudents;
exports.addStudent = addStudent;
exports.getById = getById;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;