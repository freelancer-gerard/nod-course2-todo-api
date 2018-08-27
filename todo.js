 const mongoose=require('mongoose');
 
 var Todo=mongoose.model('Todo',{
	
	text:{
		
		type:String,
		required: true,
		minlength:1,
		trim:true
	},
	
	completed:{
		
		type:Boolean,
		default: false
	},	
	
	completedAt:{
		
		type:Number,
		default: false
}

});


/*var newTodo=new Todo({
	
	text:'Play Game',
	completed:true,
	completedAt:230946,
	
});


 newTodo.save().then((doc)=>{
	
	console.log('Saved Todo',doc);
	
},(e)=>{
	
	console.log('Unable to Save');
	
	
}); 
 */

module.exports={Todo};
