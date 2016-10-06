var Sequelize = require("sequelize");

//----- CONFIGURAR LA BASE DE DATOS con sequelize
var sequelize = new Sequelize("postgres://sa:123456@localhost:5432/spia2",{
	dialect:"postgres", //OTROS VALORES: postgres, mysql, mariadb
	//la propiedad storage SOLO ES PARA sqlite
	
	define:{
		timestamps:false,
		//deshabilita la convencion por default para el nombre de las tablas
		freezeTableName:true
	}
});
var Saludo="Hola Mundo....!";
var Persona=sequelize.define("persona",{
	id:{
		primaryKey:true,
		type:Sequelize.INTEGER
	},
	nombre:Sequelize.TEXT,
	edad:Sequelize.INTEGER
},{
	tableName:"Persona"
});

exports.getPersonaAll=function(){
	Persona.findAll().then(function(persona){
		persona.forEach(function(elemento){
			console.log(elemento.dataValues);
		});
	});
};
exports.getPersonaID=function(x){
	Persona.findById(x).then(function(persona){
		if(persona!=null){
			console.log(persona.get('nombre'));

		}else{
			console.log("Sin datos");
		}
		
		//console.log("Positivo");
	});
	return Persona;
}
module.exports.Persona=Persona;
module.exports.Saludo=Saludo;