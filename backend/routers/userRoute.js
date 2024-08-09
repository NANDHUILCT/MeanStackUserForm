const express = require('express');
const app = express();
const router = express.Router();
const {getUsers,addUser,editUser,deleteUser} = require('../controllers/userController');

router.get('/',getUsers);

router.post('/signup',addUser);
router.patch('/update',editUser);
router.delete('/delete',deleteUser);


module.exports = router;