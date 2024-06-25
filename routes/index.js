var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/ADMIN1')

/*CREATE ADMIN*/
router.post('/CreateAdmin',CONTROL.createAdmin);

/*GET ALL ADMIN*/
router.get('/GetAllAdmin',CONTROL.getAllAdmins);

/*GET SINGLE ADMIN*/
router.get('/GetSingleAdmin/:id',CONTROL.getSingleAdmins);

/*UPDATE ALL ADMIN*/
router.patch('/UpdateAdmin/:id',CONTROL.updateAdmin);

/*DELETE ALL ADMIN*/
router.delete('/DeleteAdmin/:id',CONTROL.deleteAdmin);

module.exports = router;
