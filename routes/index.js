var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
  if(req.body.danmu)router.io.emit('danmu',req.body.danmu);
  res.redirect('/');
});
module.exports = router;
