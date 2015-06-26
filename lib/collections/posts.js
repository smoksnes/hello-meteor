Posts = new Mongo.Collection('posts');

Posts.allow({
	insert:function(userId, dock){
		return !! userId;
	}
})