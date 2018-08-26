//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


var obj=new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
	
	if(err){		
		return console.log('Unable to Connect to Server');		
	}
	
	console.log('Connected to Server Successfully');
	
	const db=client.db('TodoApp');
/* 	db.collection('Todos').insertOne({
		
		text:'T pickup some books',
		status:'Completed'
		
	},(err,result)=>{
		
		if(err){
			
			return console.log('Unable to Insert to Database',err);		
		}
		
		console.log(JSON.stringify(result.ops,undefined,2));	
	}); */
	
	
	db.collection('Users').find({name: 'Viren'}).toArray().then((docs)=>{
		
		console.log(JSON.stringify(docs,undefined,2));
		
	}, (err)=>{
		
		console.log('Unable to fetch ',err);
		
	});
	
	
	
	
	
	//client.close();
});