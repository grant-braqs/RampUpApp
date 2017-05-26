const MongoClient = require('mongodb').MongoClient;
var exports = module.exports;
var db;

exports.connect = function(url){
	MongoClient.connect(url,(err,database) => {
		if(err) return console.log(err); //need to handle random disconnect from db
		db = database;
	}
}

exports.createDeliverable = function(deliverable){
//owner,type,title,state,priority,cost,costrem,desc,month - create db entry for deliverable in correct month with these attributs
	db.collection(deliverable.month).save(deliverable,(err,result) =>{
		if(err) return console.log("Save failed: " + err);
		console.log("Save success: " + result);
	});
}

exports.createPerson = function(person){
//name, status,completed,access,tasks - create db entry for person with these attributes
	db.collection("people").save(person, (err,result) => {
		if(err) return console.log("Save failed: " + err);
		console.log("Save success: " + result);
	});
}

exports.getDeliverable = function(owner,state,priority,id){
	
	return deliverable;
}

exports.getPerson = function(name,id){
	return person;
}

exports.updateDeliverable = function(owner,type,title,state,priority,cost,costrem,desc){

}

exports.updatePerson = function(name,status,completed,access,tasks){

}

exports.deleteDeliverable = function(owner,id){

}

exports.deletePerson = function(name,id){

}
