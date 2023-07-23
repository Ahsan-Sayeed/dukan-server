const express = require('express');
const { getData, postData, putData, deleteData } = require('../controller/data.controller');
const { postAnalyticsData, getAnalyticsData, deleteAnalyticsData, postCourierData, getCourierData, deleteCourierData } = require('../controller/analytics.controller');
const { postSprShData, getSprShData, deleteSprShData, deleteAllData } = require('../controller/spreadsheet.controller');
const { postHistory, getHistory } = require('../controller/history.controller');
const { postUser, getUser, getUserBy } = require('../controller/users.controller');
const { postNewRecord, getAllRecord, stockDetails, updateStockDetails, deleteStockDetails, updateRecord, deleteRecord, updateSellPrice } = require('../controller/stock.controller');
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
router.delete('/spreadsheet',deleteAllData);

//History
router.post('/history',postHistory);
router.get('/history',getHistory);

//user controller
router.post('/users',postUser);
router.get('/users',getUser);
router.get('/users/:uid',getUserBy);

// stock
router.post('/stock',postNewRecord);
router.get('/stock',getAllRecord);
router.put('/stock/:id',updateRecord);
router.delete('/stock/:id',deleteRecord);

router.post('/stockdetails/:id',stockDetails)
router.put('/updatestockdetails/:id',updateStockDetails)
router.delete('/deletetockdetails/:id/:item',deleteStockDetails)

//analysis
router.put('/updatesellprice/:idp/:idc',updateSellPrice);
router.post('/courier',postCourierData)
router.get('/courier',getCourierData)
router.delete('/courier/:id',deleteCourierData)

module.exports = router;