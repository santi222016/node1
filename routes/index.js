var express = require('express');
var router = express.Router();
var modelo= require('../models/persona');
//var mPersona=require("../models/persona");
/* GET home page. */

var dummyProducts = [];
var c = 1;

router.get('/', function(req, res, next) {
  res.render('index', { title:"Hola mundo....!"});
});

router.get('/persona',function(req,res){
	modelo.Persona.findAll().then(function(persona){
		res.render('persona',{per:persona,title:"Hola Mundo"});
	});
	
});
router.get('/products',function(req,res){
	//res.json(dummyProducts);

	res.render('ventas',{title:"Ventas de Hoy",dummyProducts:JSON.stringify(dummyProducts)});
});
router.post('/products',function(req, res){

  var newProduct = req.body;

  console.log("TODO: Add newProduct to database");
  console.log(newProduct);

  newProduct["productId"] = c++;
  dummyProducts.push(newProduct);

  res.json(newProduct);
});

module.exports = router;
