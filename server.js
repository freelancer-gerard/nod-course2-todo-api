
var express=require('express');
var bodyParser=require('body-parser');


const {mongoose}=require('./mongoose');
const {Todo}=require('./todo');
const {User}=require('./user');

var app=express();
app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
	
var newTodo=new Todo({
	
	text:req.body.text
	
});


 newTodo.save().then((doc)=>{
	res.send(doc);

	
},(e)=>{
	res.status(400).send(e);

	
	
}); 
	
});



app.listen(3000,()=>{
	
	console.log('Starting Server');
})








