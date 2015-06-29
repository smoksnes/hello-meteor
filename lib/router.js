Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return [Meteor.subscribe('notifications')]
  }
});
<<<<<<< HEAD

=======
>>>>>>> 75cbd565eab288883e3a3cbabe4cfe8b7e99eeb0
Router.route('/posts/:_id', {
  name: 'postPage',
  waitOn: function () {
    return Meteor.subscribe('comments', this.params._id);
  },
  data: function () { return Posts.findOne(this.params._id); }
});
<<<<<<< HEAD

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function () { return Posts.findOne(this.params._id); }
});

Router.route('/submit', { name: 'postSubmit' });

Router.route('/:postsLimit?', {
  name: 'postsList',
  waitOn: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
    return Meteor.subscribe('posts', { sort: { submitted: -1 }, limit: limit });
  },
  data: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
    return {
      posts: Posts.find({}, { sort: { submitted: -1 }, limit: limit })
    };
  }
});

=======
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function () { return Posts.findOne(this.params._id); }
});
Router.route('/submit', { name: 'postSubmit' });
Router.route('/:postsLimit?', {
  name: 'postsList',
  waitOn: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
    return Meteor.subscribe('posts', { sort: { submitted: -1 }, limit: limit });
  },
  data: function () {
    var limit = parseInt(this.params.postsLimit) || 5;
    return {
      posts: Posts.find({}, { sort: { submitted: -1 }, limit: limit })
    };
  }
});
>>>>>>> 75cbd565eab288883e3a3cbabe4cfe8b7e99eeb0
var requireLogin = function () {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
Router.onBeforeAction('dataNotFound', { only: 'postPage' });
Router.onBeforeAction(requireLogin, { only: 'postSubmit' });