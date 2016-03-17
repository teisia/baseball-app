FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("main", {content: "splash"})
  }
});

FlowRouter.route('/instructions', {
  action:function() {
    BlazeLayout.render("main", {content: "instructions"})
  }
});

FlowRouter.route('/home', {
  action:function() {
    BlazeLayout.render("main", {content: "home"})
  }
});

FlowRouter.route('/batters', {
  action:function() {
    BlazeLayout.render("main", {content: "batters"})
  }
});

FlowRouter.route('/home-pitcher', {
  action:function() {
    BlazeLayout.render("main", {content: "home-pitcher"})
  }
});

FlowRouter.route('/game', {
  action:function() {
    BlazeLayout.render("main", {content: "game"})
  }
});

FlowRouter.route('/results', {
  action:function() {
    BlazeLayout.render("main", {content: "results"})
  }
});

FlowRouter.route('/end', {
  action:function() {
    BlazeLayout.render("main", {content: "end"})
  }
});
