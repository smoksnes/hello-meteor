Router.configure({
	layoutTemplate: 'layout',
	waitOn: function () {
		return Meteor.subscribe('posts');
	},
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', { name: 'postsList' });

Router.route('/posts/:_id', {
	name: 'postPage',
	data: function () {
		return Posts.findOne(this.params._id);
	}
});

Router.route('/submit', { name: 'postSubmit' });

var requireLogin = function () {
	if (!Meteor.user()) {
		if (Meteor.logginingI()) {
			this.render(this.loadingTemplate);
		}
		else {
			this.render('accessDenied');
		}
	}
	else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', { only: 'postPage' });
Router.onBeforeAction(requireLogin, { only: 'postSubmit' });