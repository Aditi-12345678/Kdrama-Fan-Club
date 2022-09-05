var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res, next) {
  res.render('gallery');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/submit',function(req,res){
  let name = req.body.name
  let email = req.body.email
 
  let info = `name: ${name}, email: ${email}\n`
  fs.appendFile('data.txt',info, function(e){
    if(e){
      console.log(e)
    }
    res.render("success.ejs");
    
  })
})

router.get('/submit',(req,res)=>{
  res.render('success')
})

module.exports = router;

