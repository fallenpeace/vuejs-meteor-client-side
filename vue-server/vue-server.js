if (Meteor.isClient) {
Meteor.subscribe('tasks')
// counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Tasks.find()
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}


Tasks = new Mongo.Collection('tasks');


if (Meteor.isServer) {

	Meteor.publish('tasks',function(){
		return Tasks.find()
	})
	
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
