Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){
		Meteor.subscribe('posts');
	},
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id',{
	name: 'postPage',
	data: function(){
		return Posts.findOne(this.params._id);
	}
});

Router.onBeforeAction('dataNoFound', {only: 'postPage'});