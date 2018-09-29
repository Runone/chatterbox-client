var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //very first thing that runs when page loads
  //display all messages when no room is selected
  },

  render: function() {
    for (let i = 0; i < Messages.results.length; i++) {
        if (Messages.results[i].username && Messages.results[i].text && Messages.results[i].roomname) {
          MessagesView.renderMessage(Messages.results[i].username, Messages.results[i].text, Messages.results[i].roomname);
        }
      }
  },

  renderMessage: function (name, message, roomname) {
    var newMessage = MessageView.render({'username': name, 'text': message});
    this.$chats.append(newMessage); 
  }
};

