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
      // examine the response from the server request:
      //console.log(data);
      //send to Messages
      //data an object with key of results and the value being an array of length 100
    //    for (var key in window.Messages.results) {
    //   this.renderMessage(window.Messages.results[key].username, window.Messages.results[key].text, window.Messages.results[key].roomname);
    // }
      for (let i = 0; i < data.results.length; i++) {
        callback();
        debugger;
        if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
          MessagesView.renderMessage(data.results[i].username, data.results[i].text, data.results[i].roomname);
          console.log(data);  
        }
      }   
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
