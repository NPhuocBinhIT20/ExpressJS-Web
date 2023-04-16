import express from 'express';
const router = express.Router();
import userController from '../controllers/userController';

// GET & POST add user

router.get('/add', userController.getUserCreate);
router.post('/add', userController.postUserCreate);

// User Detail

router.get('/detail/:id', userController.getUserDetail);

// Update User (GET & POST)

router.get('/update/:id', userController.getUserUpdate);
router.post('/update/:id', userController.postUserUpdate);


// Delete User (GET & POST)

router.get('/delete/:id', userController.getUserDelete);
router.post('/delete/:id', userController.postUserDelete);


module.exports = router;
