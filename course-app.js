const express = require('express')
const app = express();
app.use(express.json());

let ADMIN = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
    const {username, password} = req.headers;

    const admin = ADMINS.find(a => a.username ===username && a.password === password);
    if(admin){
        next();
    }else{
        res.status(403).json({message: 'Admin authentication failed'})
    }
};

const userAuthentication = (req, res, next) => {
    const {username, password} = req.headers;
    const user = USERS.find(u => u.username === username && u.password ===password);
    
    if(user){
        req.user = user;
        next();
    }else{
        res.status(403).json({message:'User authentication failed'});
    }
};

app.post('/admin/signup', (req,res) => {
    const admin = req.body
    const existing = ADMINS.find(a => a.username === admin.username);
    if(existingAdmin){
        res.status(403).json({message: 'Admin already exists'});
    }else{
        ADMINS.push(admin);
        res.json({message: 'Admin created successfully'})
    }
;
})

app.post('/admin/login',adminAuthentication, (req, res) => {
    res.json({message:'logged in successfully'});

});

app.post('/admin/courses', adminAuthentication,(req,res) => {
    const course = req.body;

    course.id = Date.now();

    COURSES.pish(course);
    res.json({message:'Course created successfully', courseId: course.id});

});