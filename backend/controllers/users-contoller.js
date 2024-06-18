const uuid = require('uuid');
const { validationResult } = require('express-validator');

const uniqueId = uuid.v4;

const HttpError = require('../modules/http-error'); 

let DUMMY_USER = [
    {
        id:'u1',    
        name:'test test',
        email:'test@test.com',
        password:'testers',
        school:'testschool',
        university:'testUniversity'
    }
];

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USER });
};

const getUserById = (req,res,next) => {

  const userId = req.params.uid;
  const user = DUMMY_USER.find(u =>{
      return u.id === userId;
  });

  if (!user) {
      throw new HttpError('Could not find a Post for the provided id.', 404); //pass error msg and code to http-error
    }
  
  res.json({user});

};

const signup = (req, res, next) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
    const { name, email, password, school, university } = req.body;
  
    const hasUser = DUMMY_USER.find(u => u.email === email);//check already have email and throw error
    if (hasUser) {
      throw new HttpError('Could not create user, email already exists.', 422);//422 code for invalid user input
    }
  
    const createdUser = {
      id: uniqueId(),
      name, // name: name
      email,
      password,
      school,
      university
    };
  
    DUMMY_USER.push(createdUser);
  
    res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {
    const { email, password } = req.body;
  
    const identifiedUser = DUMMY_USER.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      throw new HttpError('Could not identify user, credentials seem to be wrong.', 401);
    }
  
    res.json({message: 'Logged in!'});
};

const updateUser = (req,res,next)=>{
    
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  
  const {name,email} = req.body;
  const userId = req.params.uid;

  const updatedUser = { ...DUMMY_USER.find(u=> u.id === userId)};
  const userIndex = DUMMY_USER.findIndex(u=>u.id === userId);

  updatedUser.name = name;
  updatedUser.email = email;

  DUMMY_USER[userIndex] = updatedUser;

  res.status(200).json({post:updatedUser});
};

const deleteUser = (req, res, next) => {
  const userId = req.params.uid;
  if (!DUMMY_USER.find(u => u.id === userId)) {
      throw new HttpError('Could not find a place for that id.', 404);
  }
  DUMMY_USER = DUMMY_USER.filter(u => u.id !== userId);
  res.status(200).json({ message: 'Deleted post.' });
};


exports.getUserById = getUserById; 
exports.getUsers = getUsers;  
exports.signup = signup;  
exports.login = login; 
exports.updateUser = updateUser;
exports.deleteUser = deleteUser; 