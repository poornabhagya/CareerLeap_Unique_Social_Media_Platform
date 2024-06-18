const uuid = require('uuid');

const { validationResult } = require('express-validator');

const uniqueId = uuid.v4;

const HttpError = require('../modules/http-error'); 

let DUMMY_POST = [
    {
        id:'p1',    
        title:'Officially Graduated',
        description:'Officially graduated with BSC (Hons) in Information Technology from SLIIT',
        creator:'u1'
    }
];

const getPostById = (req,res,next) => {

    const postId = req.params.pid;
    const post = DUMMY_POST.find(p =>{
        return p.id === postId;
    });

    if (!post) {
        throw new HttpError('Could not find a Post for the provided id.', 404); //pass error msg and code to http-error
      }
    
    res.json({post});

};

const getPostsByUserId = (req,res,next) =>{
    
    const userId = req.params.uid;
    const posts = DUMMY_POST.find(p =>{  
        return p.creator === userId;
    });

    if (!posts || posts.length === 0) {  
        throw new HttpError('Could not find a Posts for the provided id.', 404); //pass error msg and code to http-error
      }

    res.json({posts});

};

const createPost = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    const { title, description, creator } = req.body;
    // const title = req.body.title;
    const createdPost = {
        id: uniqueId(),
        title,
        description,
        creator
    };
  
    DUMMY_POST.push(createdPost); 
  
    res.status(201).json({place: createdPost});
};

const updatePost = (req,res,next)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
    
    const {title,description} = req.body;
    const postId = req.params.pid;

    const updatedPost = { ...DUMMY_POST.find(p=> p.id === postId)};
    const postIndex = DUMMY_POST.findIndex(p=>p.id === postId);

    updatedPost.title = title;
    updatedPost.description = description;

    DUMMY_POST[postIndex] = updatedPost;

    res.status(200).json({post:updatedPost});
};



const deletePost = (req, res, next) => {
    const postId = req.params.pid;
    if (!DUMMY_POST.find(p => p.id === postId)) {
        throw new HttpError('Could not find a place for that id.', 404);
    }
    DUMMY_POST = DUMMY_POST.filter(p => p.id !== postId);
    res.status(200).json({ message: 'Deleted post.' });
};


  

exports.getPostById = getPostById;  
exports.getPostsByUserId = getPostsByUserId;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;    



