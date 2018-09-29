var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //very first thing that runs when page loads
  //display all messages when no room is selected
  },

  render: function() {
  },

  renderMessage: function (name, message, roomname) {
    var newMessage = MessageView.render({'username': name, 'text': message});
    this.$chats.append(newMessage); 
  }
};

