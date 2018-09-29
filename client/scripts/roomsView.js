var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function (room) {
    let newRoom = _.template('<div id="rooms"><%-rooms%></div>');
    
    this.$select.append(newRoom);
  }
};
