var fs = require('fs');
var Promise = require('bluebird');
var drugService = require('../service/drugService');
var drugServiceAsync = Promise.promisifyAll(drugService);
var moment = require('moment');
var _ = require('underscore');
var common = require('../utils/common');
var config = require('../config');
// pc Controllers

// render prediction page
exports.prediction = function(req,res,next){
  var file = "pv.data"
  var pv = 0;
  pv = fs.readFileSync(file);
  pv = parseInt(pv) + 1;
  //写入文件
  fs.writeFileSync(file, pv);
  res.render('drug/pc/pkcsm/prediction',{'accesscount': pv});
}

exports.theory = function(req,res,next){
  res.render('drug/pc/pkcsm/about');
}

exports.run_example = function(req, res, next){ 
  var rst = {"flag":0,"msg":'','data':{}};
  // 线程数目
  console.log(global.threadCount++);
  var exec = require('child_process').exec;
  var cmdStr = 'ps -C python | wc -l';
  exec(cmdStr, function(err,stdout,stderr){
	if (stdout && stdout > 1) {
		rst.msg = 'The server is busy at the moment. Please try again two minitues later...'
		res.render('drug/pc/pkcsm/error.jade', {'error': rst.msg})
		return false;
	  }else{
		  var cp = require('child_process'),
		  py  = cp.spawn('python', ['ca_all.py']),  

		  data = [],
		  dataString = '';
		  data.push("CN(C)CCCN1C2=CC=CC=C2SC2=C1C=C(C=C2)C(C)=O","0.9")   // stdin的输入字符串：Cc1ccccc1O
		  py.stdout.on('data', function(data){
			dataString += data.toString();
		  });

		  py.stdout.on('end', function(){
			global.threadCount--;
			var json = JSON.parse(dataString.replace(/\\/g,'').replace(/\"\[/g,'[').replace(/\]\"/g,']'));
			res.render('drug/pc/pkcsm/absorption.jade', {'items': json})
		  });

		  py.on('error', function(err){
			console.log(new Date());
			console.log('开启失败',err);
			process.exit();
		  });

		  py.stdin.write(JSON.stringify(data));
		  py.stdin.end();
	  }
  });
}

exports.formSubmit_absorption = function(req, res, next){ 
  req.checkBody('molecular', 'Empty molecular').notEmpty().isString();
  req.checkBody('significant', 'invalid significant').notEmpty().isNumber();
  req.checkBody('runType', 'invalid type').isString();
  var valiErrors = common.uniqObjArray(req.validationErrors());
  var rst = {"flag":0,"msg":'','data':{}};
  if (valiErrors) {
      //表单验证错误
      rst.flag = 1
      rst.msg = valiErrors[0].msg
      res.render('drug/pc/pkcsm/error.jade', {'error': rst.msg})
  }
  // 线程数目
  console.log(global.threadCount++);
  var exec = require('child_process').exec;
  var cmdStr = 'ps -C python | wc -l';
  exec(cmdStr, function(err,stdout,stderr){
	if (stdout && stdout > 1) {
		rst.msg = 'The server is busy at the moment. Please try again two minitues later...'
		res.render('drug/pc/pkcsm/error.jade', {'error': rst.msg})
		return false;
	  } else {
		  var calTypePy = req.body.runType ? `ca_${req.body.runType}.py` : 'ca.py'
		  var cp = require('child_process'),
		  py  = cp.spawn('python', [calTypePy]),  

		  data = [],
		  dataString = '';
		  rst.data.input = req.body.molecular
		  data.push(req.body.molecular, req.body.significant)
		  py.stdout.on('data', function(data){
			dataString += data.toString();
		  });

		  py.stdout.on('end', function(){
			global.threadCount--;
			// when dataString is not avaliable
			if(dataString == '' || dataString == null) {
			  res.render('drug/pc/pkcsm/error.jade', {'error': 'The input is incorrect. Please have a check.'})
			}
			//  deal json string
			console.log('debug')
			var json = JSON.parse(dataString.replace(/\\/g,'').replace(/\"\[/g,'[').replace(/\]\"/g,']'));
			res.render('drug/pc/pkcsm/absorption.jade', {'items': json})
		  });

		  py.on('error', function(err){
			console.log(new Date());
			console.log('开启失败',err);
			process.exit();
		  });

		  py.stdin.write(JSON.stringify(data));
		  py.stdin.end();
	  }
	});
}


