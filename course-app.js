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
