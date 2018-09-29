var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //very first thing that runs when page loads
  //display all messages when no room is selected
    // for (var key in window.Messages) {
    //   this.renderMessage(Messages[key]);
    // }
    
  },

  render: function() {
  },

  renderMessage: function ({username, text, roomname}) {
    var newMessage = MessageView.render({username, text});
    this.$chats.append(newMessage); 
  }
};