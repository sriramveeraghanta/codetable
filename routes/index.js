var express = require('express');
var router = express.Router();

var io = require('socket.io')(io);

/* GET home page. */
router.get('/', function(req, res, next) {
	randid = makeid();
	res.render('index', { title: 'Code Table' , randid : randid });
});

router.get('/:id',function(req,res,next){
	res.render('codetabel');
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
