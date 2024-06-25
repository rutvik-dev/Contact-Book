var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/CONTACT1')

/*CREATE CONTACT*/
router.post('/CreateContact',CONTROL.CreateContact);

/*GET ALL CONTACT*/
router.get('/GetAllContact',CONTROL.GetAllContact);

/*GET SINGLE CONTACT*/
router.get('/GetSingleContact/:id',CONTROL.GetSingleContact);

/*UPDATE ALL CONTACT*/
router.patch('/UpdateContact/:id',CONTROL.UpdateContact);

/*DELETE ALL CONTACT*/
router.delete('/DeleteContact/:id',CONTROL.DeleteContact);

module.exports = router;
