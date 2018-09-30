var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
    Messages.results = data.results;
    Rooms.results = data.results;
      // examine the response from the server request:
      //console.log(data);
      //send to Messages
      //data an object with key of results and the value being an array of length 100
    //    for (var key in window.Messages.results) {
    //   this.renderMessage(window.Messages.results[key].username, window.Messages.results[key].text, window.Messages.results[key].roomname);
    // }
      callback();
      MessagesView.render();
      RoomsView.render();
  console.log(data);   
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
