const mongoose=require('mongoose');

var User=mongoose.model('User',{
	
	email:{
		
		required:true,
		minlength:1,
		type:String,
		trim:true
		
	}
	
	
	
	
});


/* var newUser=new User({
	
	email:'gd2@gmail.com'
	
});


newUser.save().then((doc)=>{
	
	console.log('Saved User',doc);
	
},(e)=>{
	
	console.log('Unable to Save');
	
	
});

 */
module.exports={User};