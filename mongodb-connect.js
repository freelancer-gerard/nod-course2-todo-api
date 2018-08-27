//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


var obj=new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	
	if(err){		
		return console.log('Unable to Connect to Server');		
	}
	
	console.log('Connected to Server Successfully');
	
	const db=client.db('TodoApp');
/*  	db.collection('Users').insertOne({
		
		name:'Jane',
		age:'50',
		location:'Mumbai'
		
	},(err,result)=>{
		
		if(err){
			
			return console.log('Unable to Insert to Database',err);		
		}
		
		console.log(JSON.stringify(result.ops,undefined,2));	
	});  */
	
	
/* 	db.collection('Users').find({name: 'Jane'}).toArray().then((docs)=>{
		
		console.log(JSON.stringify(docs,undefined,2));
		
	}, (err)=>{
		
		console.log('Unable to fetch ',err);
		
	});  */
	
	
 	db.collection('Users').findOneAndDelete({name:'Gerard'}).then((result)=>{
		
		console.log(result);
		
		
	});
	
	
	
	
	
	
	//client.close();
});