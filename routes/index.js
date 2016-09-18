var express = require('express');
var router = express.Router();
var url = require('url');

var io = require('socket.io')(io);

/* GET home page. */
router.get('/', function(req, res, next) {
	randid = makeid();
	res.render('index', { title: 'Collab Code' , randid : randid });
});

router.get('/editor/:sid',function(req,res,next){
	var urlId = req.params.sid;
	console.log(urlId);
	res.render('codetabel', {id: urlId});
});

router.get('/about',function(req,res,next){
	res.render('about')
});


function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = router;
