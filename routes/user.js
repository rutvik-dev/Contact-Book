var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/USER1')

/*SIGNUP USER*/
router.post('/SignupUser',CONTROL.SignupUser);

/*LOGIN USER*/
router.post('/LoginUser',CONTROL.Loginuser);

/*GET ALL DETA USER*/
router.get('/GetAllDetaUser',CONTROL.ReadAllUser);

/*GET SINGLE USER*/
router.get('/GetSingleUser/:id',CONTROL.sequre,CONTROL.ReadSingleUser);

/*UPDATE USER*/
router.patch('/UpdateUser/:id',CONTROL.UpdateUser);

/*DELETE  USER*/
router.delete('/DeleteUser/:id',CONTROL.deleteUser);

module.exports = router;
