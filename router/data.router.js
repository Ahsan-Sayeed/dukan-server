const express = require('express');
const { getData, postData, putData, deleteData } = require('../controller/data.controller');
const { postAnalyticsData, getAnalyticsData, deleteAnalyticsData } = require('../controller/analytics.controller');
const { postSprShData, getSprShData, deleteSprShData } = require('../controller/spreadsheet.controller');
const { postHistory, getHistory, deleteHistory, deleteHistory2 } = require('../controller/history.controller');
const { postUser, getUser, getUserBy } = require('../controller/users.controller');
const router = express.Router();

router.get('/',getData);

router.post('/',postData);

router.put('/',putData);

router.delete('/',deleteData);

//analytics
router.post('/analytics',postAnalyticsData);
router.get('/analytics',getAnalyticsData);
router.delete('/analytics/:id',deleteAnalyticsData);

//spreadsheet
router.post('/spreadsheet',postSprShData)
router.get('/spreadsheet',getSprShData);
router.delete('/spreadsheet/:id',deleteSprShData);

//History
router.post('/history',postHistory);
router.get('/history',getHistory);
router.delete('/history',deleteHistory);
// router.delete('/history/v1',deleteHistory2);

//user controller
router.post('/users',postUser);
router.get('/users',getUser);
router.get('/users/:uid',getUserBy);



module.exports = router;