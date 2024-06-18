const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-contoller');

const router = express.Router();

router.get('/',usersControllers.getUsers);

router.get('/:uid',usersControllers.getUserById);

//router.post('/signup',usersControllers.signup);

router.post(
    '/signup',
    [
    check('name')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail() // Test@test.com => test@test.com
            .isEmail(),
        check('password').isLength({ min: 6 }),
      
    ],
    usersControllers.signup
);

router.post('/login',usersControllers.login);

router.patch(
    '/:uid',
    [
      check('name')
        .not()
        .isEmpty(),
        check('email')
        .normalizeEmail() // Test@test.com => test@test.com
        .isEmail(),
    ],
    usersControllers.updateUser
);

router.delete('/:uid',usersControllers.deleteUser);

//router.delete('/:pid',postsControllers.deletePost);




module.exports = router;