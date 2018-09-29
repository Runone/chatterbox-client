var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    });
  },

  // beFriend: function(userName, successCB, errorCB = null) {
  // //adding to the friends list
  //   $.ajax({
  //     url: Parse.server,
  //     type: 'PUT',
  //     data: JSON.stringify(username),
  //     contentType: 'application/json',
  //     success: successCB,
  //     error: errorCB || function(error) {
  //       console.error('chatterbox: Failed to add friends', error);
  //     }
  //   });
  // },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};